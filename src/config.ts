import { ChainId } from 'goswap-sdk';
import { Configuration } from './go-farm/config';
import { FarmInfo, VaultInfo, LotteryInfo } from './go-farm';

const configurations: { [env: string]: Configuration } = {
  production: {
    chainId: ChainId.HECOMAIN,
    etherscanUrl: 'https://hecoinfo.com',
    defaultProvider: 'https://http-mainnet.hecochain.com',
    MasterChef: '0x7dCeBC34F55b52df742C91581089ebD0BCBD254F',
    MasterChefV2: '0xb6e8Df513dD634Bc033CdB3099448269728e8deE',
    GetApy: '0xE453Fd8FF38b46fBda57f236103f6336CBf50594',
    GetApyV2: '0xFbff130B9144a1ec5861216018d491582a76EE2b',
    GetVaultApy: '0xaE3a4402B987Ad29D5e7F17Bbb4fD22a713f7DaE',
    GetGOTApy: '0xE3e22A3a6EBc8b4265843C1f9f15d71E6b751467',
    LotteryAnalysis: '0x6cE62A376Ca636E53F9b8b0b8e13Dc2CE14d1bdc',
    deployments: require('./go-farm/deployments/deployments.mainnet.json'),
    externalTokens: {
      USDT: ['0xa71EdC38d189767582C38A3145b5873052c3e47a', 18],
      HUSD: ['0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047', 8],
      HT: ['0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18],
      BTC: ['0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa', 18],
      ETH: ['0x64FF637fB478863B7468bc97D30a5bF3A428a1fD', 18],
      BCH: ['0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375', 18],
      LTC: ['0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4', 18],
      DOT: ['0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3', 18],
      HPT: ['0xE499Ef4616993730CEd0f31FA2703B92B50bB536', 18],
      FIL: ['0xae3a768f9aB104c69A7CD6041fE16fFa235d1810', 18],
      MDX: ['0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c', 18],
      UNI: ['0x22C54cE8321A4015740eE1109D9cBc25815C46E6', 18],
      YFI: ['0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35', 18],
      LINK: ['0x9e004545c59D359F6B7BFB06a26390b087717b42', 18],
      Water: ['0x08431e66Cf0b501A3E2df2d2D3dF24Aa947B6d21', 18],
      Earth: ['0xB6F4c418514dd4680F76d5caa3bB42dB4A893aCb', 18],
      Fire: ['0xB6F4c418514dd4680F76d5caa3bB42dB4A893aCb', 18],
      Wood: ['0xB6F4c418514dd4680F76d5caa3bB42dB4A893aCb', 18],
      Metal: ['0xB6F4c418514dd4680F76d5caa3bB42dB4A893aCb', 18],
      'Water_USDT': ['0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2', 18],
      'Wood_USDT': ['0xbb12324A015785076D966f654CF0123A70970D1d', 18],
      'Fire_USDT': ['0xaA8569CBe4BfC57F8Ffa48920D4B01EbEeD24df8', 18],
      'Earth_USDT': ['0x533085DD6E39Bde0Ac8B75Df338C62077d60FFf5', 18],
      'Metal_USDT': ['0x9513D6C2FD765E03369D086CA11C04d99E2b835c', 18]
    },
    vaults: {
      HUSD: '0x94832D6B65327c3bA11b005B98998F238091555D',
      HT: '0xF56728794DaD2D02595876E0582185aF8f994Bcb',
      USDT: '0xb95b9Fa817471BbC100F62d36187BC95C3F0c09B',
      BTC: '0x0556D0D33aC6380cc43a3f923CB25cEf58D08a2c',
      ETH: '0x3eD2fA1A783B223B3C761b49c4a2a6632415BFdD',
      BCH: '0x58E5bB0e091C1F9689a896A785f5CBB052857CC6',
      LTC: '0x0617c0b1471023850dAeF88a390F7FBC30f7BBE6',
      DOT: '0x2f7624b3fc0564C357F6AaCa9b5A0A5F3027827A',
      HPT: '0x9bc916A33d932dA04285c5A68d2D2E7BA333339b',
      FIL: '0x809d7703810152c0AC665406206F8C50630d0FcF',
      Earth: '0xCD0e39551Aba76A14fdac3c312192DFd141a3815',
      Metal: '0x76f48d7ab2081215155ff7e9f18b7d1e803c97de',
      Fire: '0xc65A0980B911f30D3bf30ADcFE33fA1141E17a58',
      Wood: '0x77F77D8c3833A851e33063B137E39Fb0f88D0314',
      Water: '0x08431e66Cf0b501A3E2df2d2D3dF24Aa947B6d21',
      Water_USDT: '0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2',
      Wood_USDT: '0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2',
      Fire_USDT: '0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2',
      Metal_USDT: '0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2',
      Earth_USDT: '0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2'
    },
    lotterys:{
      USDT : '0x3bEE0d618FE8a3F07460445de34aCCdc313B3f01'
    },
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7
  },
};

export const bankDefinitions: { [contractName: string]: FarmInfo } = {
  pool_4: {
    name: '海卫一紫菜',
    depositTokenName: 'GOT_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'HT',
    finished: false,
    sort: 5,
    pid: 4,
  }
};
export const farmDefinitions: { [contractName: string]: FarmInfo } = {
  pool_11: {
    name: '洛希极限丝瓜',
    depositTokenName: 'GOC_ETH-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'ETH',
    finished: false,
    sort: 12,
    pid: 11,
  }
};
export const vaultDefinitions: { [contractName: string]: VaultInfo } = {
  pool_00: {
    name: 'Water',
    depositTokenName: 'Water',
    earnTokenName: 'Water',
    needticket:true,
    needtax:false,
    finished: false,
    sort: 1,
    id: 1,
    time:1,
  },
  pool_01: {
    name: 'USDT',
    depositTokenName: 'USDT',
    earnTokenName: 'Water',
    needticket:true,
    needtax:true,
    finished: false,
    sort: 2,
    id: 2,
    time:1,
  },
  pool_10: {
    name: 'Water',
    depositTokenName: 'Water',
    needticket:true,
    needtax:false,
    earnTokenName: 'Earth',
    finished: false,
    sort: 3,
    id: 3,
    time:2,
  },
  pool_11: {
    name: 'Water_USDT',
    depositTokenName: 'Water_USDT',
    earnTokenName: 'Earth',
    finished: false,
    needticket:true,
    needtax:false,
    sort: 4,
    id: 4,
    time:2,
  },
  pool_12: {
    name: 'Earth_USDT',
    depositTokenName: 'Earth_USDT',
    earnTokenName: 'Earth',
    finished: false,
    needtax:false,
    needticket:true,
    sort: 5,
    id: 5,
    time:2,
  },
  pool_20: {
    name: 'Earth',
    depositTokenName: 'Earth',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 6,
    id: 6,
    time:3,
  },
  pool_21: {
    name: 'Water_USDT',
    depositTokenName: 'Water_USDT',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 7,
    id: 7,
    time:3,
  },
  pool_22: {
    name: 'Earth_USDT',
    depositTokenName: 'Earth_USDT',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 8,
    id: 8,
    time:3,
  },
  pool_23: {
    name: 'Wood_USDT',
    depositTokenName: 'Wood_USDT',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 9,
    id: 9,
    time:3,
  },
  pool_30: {
    name: 'Wood',
    depositTokenName: 'Wood',
    earnTokenName: 'Fire',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 10,
    id: 10,
    time:4,
  },
  pool_31: {
    name: 'Earth_USDT',
    depositTokenName: 'Earth_USDT',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 11,
    id: 11,
    time:4,
  },
  pool_32: {
    name: 'Wood_USDT',
    depositTokenName: 'Wood_USDT',
    earnTokenName: 'Wood',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 12,
    id: 12,
    time:4,
  },
  pool_33: {
    name: 'Fire_USDT',
    depositTokenName: 'Fire_USDT',
    earnTokenName: 'Fire',
    needticket:false,
    finished: false,
    needtax:false,
    sort: 13,
    id: 13,
    time:4,
  },
  pool_40: {
    name: 'Fire',
    depositTokenName: 'Fire',
    earnTokenName: 'Metal',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 14,
    id: 14,
    time:5,
  },
  pool_41: {
    name: 'Fire_USDT',
    depositTokenName: 'Fire_USDT',
    earnTokenName: 'Metal',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 15,
    id: 15,
    time:5,
  },
  pool_42: {
    name: 'Wood_USDT',
    depositTokenName: 'Wood_USDT',
    earnTokenName: 'Metal',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 16,
    id: 16,
    time:5,
  },
  pool_43: {
    name: 'Earth_USDT',
    depositTokenName: 'Earth_USDT',
    earnTokenName: 'Metal',
    finished: false,
    needticket:false,
    needtax:false,
    sort: 17,
    id: 17,
    time:5,
  },
};
export const lotteryDefinitions: { [contractName: string]: LotteryInfo } = {
  pool_0: {
    name: '入场券',
    depositTokenName: 'USDT',
    finished: false,
    sort: 0,
    id: 15,
  }
};
export const epochDefinitions: { [contractName: string]: FarmInfo } = {
  pool_1: {
    name: 'USDT',
    depositTokenName: 'GOT_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'HT',
    finished: false,
    sort: 5,
    pid: 4,
  },
};
export default configurations["production"];