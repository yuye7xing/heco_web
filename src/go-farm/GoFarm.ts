import { Fetcher, Route, Token } from 'goswap-sdk';
import { Configuration } from './config';
import { StartTime, TokenStat, UserInfo } from './types';
import { BigNumber, Contract, ethers, Overrides } from 'ethers';
import { TransactionResponse } from '@ethersproject/providers';
import ERC20 from './ERC20';
import { getDefaultProvider } from '../utils/provider';
import IUniswapV2PairABI from './IUniswapV2Pair.abi.json';
import MasterChefABI from './deployments/masterChef.abi.json';
import GetApyAbi from './deployments/GetApy.abi.json';

/**
 * An API module of GoFarm Cash contracts.
 * All contract-interacting domain logic should be defined in here.
 */
export class GoFarm {
  myAccount: string;
  provider: ethers.providers.Web3Provider;
  signer?: ethers.Signer;
  config: Configuration;
  contracts: { [name: string]: Contract };
  pair: { [name: string]: Contract };
  externalTokens: { [name: string]: ERC20 };
  boardroomVersionOfUser?: string;

  bacDai: Contract;

  constructor(cfg: Configuration) {
    const { deployments, externalTokens } = cfg;
    const provider = getDefaultProvider();

    // loads contracts from deployments
    this.contracts = {};
    this.contracts['MasterChef'] = new Contract(cfg.MasterChef, MasterChefABI, provider);
    this.contracts['GetApy'] = new Contract(cfg.GetApy, GetApyAbi, provider);
    this.externalTokens = {};
    this.pair = {};
    for (const [symbol, [address, decimal]] of Object.entries(externalTokens)) {
      this.externalTokens[symbol] = new ERC20(address, provider, symbol, decimal);
    }

    // Uniswap V2 Pair
    this.bacDai = new Contract(externalTokens['GOT_HUSD-LP'][0], IUniswapV2PairABI, provider);

    this.config = cfg;
    this.provider = provider;
  }

  /**
   * @param provider From an unlocked wallet. (e.g. Metamask)
   * @param account An address of unlocked wallet account.
   */
  unlockWallet(provider: any, account: string) {
    const newProvider = new ethers.providers.Web3Provider(provider, this.config.chainId);

    this.signer = newProvider.getSigner(0);
    this.myAccount = account;
    for (const [name, contract] of Object.entries(this.contracts)) {
      this.contracts[name] = contract.connect(this.signer);
    }
    const tokens = [...Object.values(this.externalTokens)];
    for (const token of tokens) {
      token.connect(this.signer);
    }
    this.bacDai = this.bacDai.connect(this.signer);
    this.boardroomVersionOfUser = 'latest';
  }

  get isUnlocked(): boolean {
    return !!this.myAccount;
  }

  gasOptions(gas: BigNumber): Overrides {
    const multiplied = Math.floor(gas.toNumber() * this.config.gasLimitMultiplier);
    console.log(`⛽️ Gas multiplied: ${gas} -> ${multiplied}`);
    return {
      gasLimit: BigNumber.from(multiplied),
    };
  }

  /**
   * @returns GoFarm stats from Uniswap.
   * It may differ from the GOT price used on Treasury (which is calculated in TWAP)
   */
  async getGOTStatFromUniswap(): Promise<TokenStat> {
    const supply = await this.externalTokens['GOT'].displayedTotalSupply();
    return {
      priceInDAI: await this.getTokenPriceFromUniswap(this.externalTokens['GOT']),
      totalSupply: supply,
    };
  }

  async getShareStat(): Promise<TokenStat> {
    return {
      priceInDAI: await this.getTokenPriceFromUniswap(this.externalTokens['GOT']),
      totalSupply: await this.externalTokens['GOT'].displayedTotalSupply(),
    };
  }

  async getTokenPriceFromUniswap(tokenContract: ERC20): Promise<string> {
    await this.provider.ready;

    const { chainId } = this.config;
    const { HUSD } = this.config.externalTokens;

    const husd = new Token(chainId, HUSD[0], 8);
    const token = new Token(chainId, tokenContract.address, 18);

    try {
      const husdToToken = await Fetcher.fetchPairData(husd, token, this.provider);
      const priceInHUSD = new Route([husdToToken], token);
      console.log(priceInHUSD.midPrice);
      return priceInHUSD.midPrice.toSignificant(3);
    } catch (err) {
      console.error(`Failed to fetch token price of ${tokenContract.symbol}: ${err}`);
    }
  }

  async earnedFromFarm(pid: number, account = this.myAccount): Promise<BigNumber> {
    const pool = this.contracts['MasterChef'];
    try {
      return await pool.pendingGOT(pid, account);
    } catch (err) {
      console.error(`Failed to call earned() on pool ${pool.address}: ${err.stack}`);
      return BigNumber.from(0);
    }
  }

  async stakedBalanceOnFarm(pid: number, account = this.myAccount): Promise<UserInfo> {
    const pool = this.contracts['MasterChef'];
    return await pool.userInfo(pid, account);
  }

  /**
   * Deposits token to given pool.
   * @param poolName A name of pool contract.
   * @param amount Number of tokens with decimals applied. (e.g. 1.45 DAI * 10^18)
   * @returns {string} Transaction hash
   */
  async stake(pid: number, amount: BigNumber): Promise<TransactionResponse> {
    const pool = this.contracts['MasterChef'];
    const gas = await pool.estimateGas.deposit(pid, amount);
    return await pool.deposit(pid, amount, this.gasOptions(gas));
  }

  /**
   * Withdraws token from given pool.
   * @param poolName A name of pool contract.
   * @param amount Number of tokens with decimals applied. (e.g. 1.45 DAI * 10^18)
   * @returns {string} Transaction hash
   */
  async unstake(pid: number, amount: BigNumber): Promise<TransactionResponse> {
    const pool = this.contracts['MasterChef'];
    const gas = await pool.estimateGas.withdraw(pid, amount);
    return await pool.withdraw(pid, amount, this.gasOptions(gas));
  }

  /**
   * Transfers earned token reward from given pool to my account.
   */
  async harvest(pid: number): Promise<TransactionResponse> {
    const pool = this.contracts['MasterChef'];
    const gas = await pool.estimateGas.harvest(pid);
    return await pool.harvest(pid, this.gasOptions(gas));
  }

  async getApy(): Promise<string> {
    const getApy = this.contracts['GetApy'];
    return await getApy.getAllApy();
  }

  async getAllPoolPrice(): Promise<string> {
    const getApy = this.contracts['GetApy'];
    return await getApy.getAllPoolPrice();
  }

  async getAllAlloc(): Promise<string> {
    const getApy = this.contracts['GetApy'];
    return await getApy.getAllAlloc();
  }

  async getTvl(): Promise<BigNumber> {
    const getApy = this.contracts['GetApy'];
    return await getApy.getTvl();
  }

  async getStartTime(): Promise<StartTime> {
    const startTime = new Date(1615348800000);
    
    return {startTime};
  }

  /**
   * Harvests and withdraws deposited tokens from the pool.
   */
  async exit(pid: number): Promise<TransactionResponse> {
    const pool = this.contracts['MasterChef'];
    const gas = await pool.estimateGas.exit(pid);
    return await pool.exit(pid, this.gasOptions(gas));
  }
}
