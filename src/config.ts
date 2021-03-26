import { ChainId } from 'goswap-sdk';
import { Configuration } from './go-farm/config';
import { FarmInfo, VaultInfo } from './go-farm';

const configurations: { [env: string]: Configuration } = {
  development: {
    chainId: ChainId.HECOTEST,
    etherscanUrl: 'https://testnet.hecoinfo.com',
    defaultProvider: 'https://http-testnet.hecochain.com',
    MasterChef: '0xC9FAA89989bd6562dbc67f34F825028A79f4f1B1',
    GetApy: '0x0462d64E23CDA9A5ECEE2896356875B8d3B81fD9',
    GetVaultApy: '0xaE3a4402B987Ad29D5e7F17Bbb4fD22a713f7DaE',
    GetGOTApy: '0xD25dF71c0dD1291ff65A3279DD4C63a5Bd0ae0D4',
    deployments: require('./go-farm/deployments/deployments.testnet.json'),
    externalTokens: {
      GOT: ['0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391', 18],
      GOS: ['0x36b29B53c483bd00978D40126E614bb7e45d8354', 18],
      GOC: ['0x271B54EBe36005A7296894F819D626161C44825C', 18],
      USDT: ['0x4a0795da0044e083EA82207E6F8a75194A2f11D0', 18],
      HUSD: ['0x0f548051B135fa8f7F6190cb78Fd13eCB544fEE6', 8],
      BTC: ['0x4139d24c6C25Cc44F1F405405aC4BF44682F37C6', 18],
      ETH: ['0x6B958fe634e4bb5fe8Fd363E1D9E85C14e61fBF4', 18],
      HT: ['0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F', 18],
      DOT: ['0xE9ab18781dcB3709c45Edb72688706435B17052f', 18],
      'GOT_HUSD-LP': ['0xc31b9f33fb2c54b789c263781ccee9b23b747677', 18],
      'GOT_USDT-LP': ['0xb13598584a6b73644460e1bfacedcef95c17c650', 18],
      'GOT_BTC-LP': ['0x3c21d92c83de04d026db7795e656d8a247cb984d', 18],
      'GOT_ETH-LP': ['0x334c271f41ab4415032f37e6190c4f8f6a8527c8', 18],
      'GOT_HT-LP': ['0x61a02786895c9c4ac1c017247bcd6070f0e18e17', 18],
      'GOT_DOT-LP': ['0x704ba9f70560467e9fd868c040184d116e1b52bd', 18],
      'GOT_GOS-LP': ['0x0226a0a7493dad879fbed7aa60692fd593510f99', 18],
      'GOT_GOC-LP': ['0xb666d590a8593bfca34c557251a7445798320d6d', 18],
      'GOC_HUSD-LP': ['0x28bfcd3c234b710d93232b5e51a2e8b8a5bb9d2f', 18],
      'GOC_USDT-LP': ['0xe5c67f26c4112d07af265ab07994afdb34200738', 18],
      'GOC_BTC-LP': ['0x4e33a6db97d4b2b752af793fff1c977c6d3cc64e', 18],
      'GOC_ETH-LP': ['0xd8fb79abe7714c3d9829d58f4a21e62df12f2689', 18],
      'GOC_HT-LP': ['0xc93c141288340efc45d36e85ca40c2dca378d2d2', 18],
      'GOC_DOT-LP': ['0x93363d362da93acd4dbb2656f74bbaa7a6a0878c', 18],
      'GOS_HUSD-LP': ['0xd0e8d781fae230e3da6e45ed881c99ba639ca400', 18],
      'GOS_USDT-LP': ['0xf577e0caf94472801fbcbabb45e8b974e2439ea8', 18],
    },
    vaults: {
      HUSD: '0xAF0DA088d0c2fDc1ceD8A4484445e54B0ffC7B14',
      HT: '0x2F80931dC31003d6fB6Ed91BD4F4b43224D348C8',
      USDT: '0xCc555dfe688E3C9Ec5278f8ceD1846fEda8633f9',
    },
    refreshInterval: 10000,
    gasLimitMultiplier: 1.1
  },
  production: {
    chainId: ChainId.HECOMAIN,
    etherscanUrl: 'https://hecoinfo.com',
    defaultProvider: 'https://http-mainnet.huobichain.com',
    MasterChef: '0x7dCeBC34F55b52df742C91581089ebD0BCBD254F',
    GetApy: '0xE453Fd8FF38b46fBda57f236103f6336CBf50594',
    GetVaultApy: '0xaE3a4402B987Ad29D5e7F17Bbb4fD22a713f7DaE',
    GetGOTApy: '0xE3e22A3a6EBc8b4265843C1f9f15d71E6b751467',
    deployments: require('./go-farm/deployments/deployments.mainnet.json'),
    externalTokens: {
      GOT: ['0xA7d5b5Dbc29ddef9871333AD2295B2E7D6F12391', 18],
      sGOT: ['0x324e22a6D46D514dDEcC0D98648191825BEfFaE3', 18],
      GOS: ['0x3bb34419a8E7d5E5c68B400459A8eC1AFfe9c56E', 18],
      GOC: ['0x271B54EBe36005A7296894F819D626161C44825C', 18],
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
      BETH: ['0xB6F4c418514dd4680F76d5caa3bB42dB4A893aCb', 18],
      'GOT_HUSD-LP': ['0x11d6a89Ce4Bb44138219ae11C1535F52E16B7Bd2', 18],
      'GOT_USDT-LP': ['0xbb12324A015785076D966f654CF0123A70970D1d', 18],
      'GOT_BTC-LP': ['0xaA8569CBe4BfC57F8Ffa48920D4B01EbEeD24df8', 18],
      'GOT_ETH-LP': ['0x533085DD6E39Bde0Ac8B75Df338C62077d60FFf5', 18],
      'GOT_HT-LP': ['0x9513D6C2FD765E03369D086CA11C04d99E2b835c', 18],
      'GOT_DOT-LP': ['0x5BdC5d27596d7DF546B178c5E7bdd063DF3a6579', 18],
      'GOT_GOS-LP': ['0x009994eD69e9bCB8180Aa2BBe6Bf46Fb735Bb682', 18],
      'GOT_GOC-LP': ['0xB7f69A9acb0d71FAa689F8f0021EB6dbc6cD6214', 18],
      'GOC_HUSD-LP': ['0xEe09490789564e22c9b6252a2419A57055957a47', 18],
      'GOC_USDT-LP': ['0xB5C88Ec8F5C75bb5AB5349fe9ECC46380cF44A95', 18],
      'GOC_BTC-LP': ['0xE7aea89D9cB20e5D2f1A7a70Fc97B91BDB66227f', 18],
      'GOC_ETH-LP': ['0x8242C3cBdF180863BbD23B4Ef9A1Fa38Fe8eDBB2', 18],
      'GOC_HT-LP': ['0x228a8073A6c1d3B4402E01c70305261319b0F67D', 18],
      'GOC_DOT-LP': ['0x31641cC22c6139FA8724410BB499c829BC9B5Dc0', 18],
      'GOS_HUSD-LP': ['0xdaDE2b002d135c5796f7cAAd544f9Bc043D05C9B', 18],
      'GOS_USDT-LP': ['0xE4224d87F2502216A85F3b46eBb5f61F2004EfC2', 18],
    },
    vaults: {
      GOT: '0x324e22a6D46D514dDEcC0D98648191825BEfFaE3',
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
      MDX: '0xCD0e39551Aba76A14fdac3c312192DFd141a3815',
      UNI: '0x76f48d7ab2081215155ff7e9f18b7d1e803c97de',
      YFI: '0xc65A0980B911f30D3bf30ADcFE33fA1141E17a58',
      LINK: '0x77F77D8c3833A851e33063B137E39Fb0f88D0314',
      BETH: '0x5a4Cd1BCc5189BDd55C65eF8eB965A86E09aE0C3',
    },
    refreshInterval: 30000,
    gasLimitMultiplier: 1.7
  },
};

export const bankDefinitions: { [contractName: string]: FarmInfo } = {
  pool_0: {
    name: '火星土豆',
    depositTokenName: 'GOT_HUSD-LP',
    TokenA: 'GOT',
    TokenB: 'HUSD',
    earnTokenName: 'GOT',
    finished: false,
    sort: 1,
    pid: 0,
  },
  pool_1: {
    name: '月球大米',
    depositTokenName: 'GOT_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'USDT',
    finished: false,
    sort: 2,
    pid: 1,
  },
  pool_2: {
    name: '土卫六葡萄',
    depositTokenName: 'GOT_BTC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'BTC',
    finished: false,
    sort: 3,
    pid: 2,
  },
  pool_3: {
    name: '木卫三西瓜',
    depositTokenName: 'GOT_ETH-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'ETH',
    finished: false,
    sort: 4,
    pid: 3,
  },
  pool_4: {
    name: '海卫一紫菜',
    depositTokenName: 'GOT_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'HT',
    finished: false,
    sort: 5,
    pid: 4,
  },
  pool_5: {
    name: '反重力花生',
    depositTokenName: 'GOT_DOT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'DOT',
    finished: false,
    sort: 6,
    pid: 5,
  },
  pool_6: {
    name: '脉冲星竹笋',
    depositTokenName: 'GOT_GOS-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'GOS',
    finished: false,
    sort: 7,
    pid: 6,
  },
  pool_7: {
    name: '暗物质蘑菇',
    depositTokenName: 'GOT_GOC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOT',
    TokenB: 'GOC',
    finished: false,
    sort: 8,
    pid: 7,
  },
  pool_8: {
    name: '中微子芝麻',
    depositTokenName: 'GOC_HUSD-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'HUSD',
    finished: false,
    sort: 9,
    pid: 8,
  },
  pool_9: {
    name: '奥尔特云豆',
    depositTokenName: 'GOC_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'USDT',
    finished: false,
    sort: 10,
    pid: 9,
  },
  pool_10: {
    name: '柯伊伯带豆角',
    depositTokenName: 'GOC_BTC-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'BTC',
    finished: false,
    sort: 11,
    pid: 10,
  },
  pool_11: {
    name: '洛希极限丝瓜',
    depositTokenName: 'GOC_ETH-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'ETH',
    finished: false,
    sort: 12,
    pid: 11,
  },
  pool_12: {
    name: '引力波豆芽',
    depositTokenName: 'GOC_HT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'HT',
    finished: false,
    sort: 13,
    pid: 12,
  },
  pool_13: {
    name: '拉格朗日菠菜',
    depositTokenName: 'GOC_DOT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOC',
    TokenB: 'DOT',
    finished: false,
    sort: 14,
    pid: 15,
  },
  pool_14: {
    name: '二向箔生菜',
    depositTokenName: 'GOS_HUSD-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOS',
    TokenB: 'HUSD',
    finished: false,
    sort: 15,
    pid: 13,
  },
  pool_15: {
    name: '黑暗森林木耳',
    depositTokenName: 'GOS_USDT-LP',
    earnTokenName: 'GOT',
    TokenA: 'GOS',
    TokenB: 'USDT',
    finished: false,
    sort: 16,
    pid: 14,
  },
};
export const vaultDefinitions: { [contractName: string]: VaultInfo } = {
  pool_00: {
    name: 'GOT',
    depositTokenName: 'GOT',
    finished: false,
    sort: 0,
    id: 15,
  },
  pool_0: {
    name: 'HUSD',
    depositTokenName: 'HUSD',
    finished: false,
    sort: 1,
    id: 0,
  },
  pool_1: {
    name: 'HT',
    depositTokenName: 'HT',
    finished: false,
    sort: 2,
    id: 1,
  },
  pool_2: {
    name: 'USDT',
    depositTokenName: 'USDT',
    finished: false,
    sort: 3,
    id: 2,
  },
  pool_3: {
    name: 'BTC',
    depositTokenName: 'BTC',
    finished: false,
    sort: 4,
    id: 3,
  },
  pool_4: {
    name: 'ETH',
    depositTokenName: 'ETH',
    finished: false,
    sort: 5,
    id: 4,
  },
  pool_5: {
    name: 'BCH',
    depositTokenName: 'BCH',
    finished: false,
    sort: 6,
    id: 5,
  },
  pool_6: {
    name: 'LTC',
    depositTokenName: 'LTC',
    finished: false,
    sort: 7,
    id: 6,
  },
  pool_7: {
    name: 'DOT',
    depositTokenName: 'DOT',
    finished: false,
    sort: 8,
    id: 7,
  },
  pool_8: {
    name: 'HPT',
    depositTokenName: 'HPT',
    finished: false,
    sort: 9,
    id: 8,
  },
  pool_9: {
    name: 'FIL',
    depositTokenName: 'FIL',
    finished: false,
    sort: 10,
    id: 9,
  },
  pool_10: {
    name: 'MDX',
    depositTokenName: 'MDX',
    finished: false,
    sort: 11,
    id: 10,
  },
  pool_11: {
    name: 'UNI',
    depositTokenName: 'UNI',
    finished: false,
    sort: 12,
    id: 11,
  },
  pool_12: {
    name: 'YFI',
    depositTokenName: 'YFI',
    finished: false,
    sort: 13,
    id: 12,
  },
  pool_13: {
    name: 'LINK',
    depositTokenName: 'LINK',
    finished: false,
    sort: 14,
    id: 13,
  },
  pool_14: {
    name: 'BETH',
    depositTokenName: 'BETH',
    finished: false,
    sort: 15,
    id: 14,
  },
};
// export default configurations[process.env.NODE_ENV || "development"];
export default configurations["production"];
// export default configurations["development"];
// ["0x94832D6B65327c3bA11b005B98998F238091555D",
// "0xF56728794DaD2D02595876E0582185aF8f994Bcb",
// "0xb95b9Fa817471BbC100F62d36187BC95C3F0c09B",
// "0x0556D0D33aC6380cc43a3f923CB25cEf58D08a2c",
// "0x3eD2fA1A783B223B3C761b49c4a2a6632415BFdD",
// "0x58E5bB0e091C1F9689a896A785f5CBB052857CC6",
// "0x0617c0b1471023850dAeF88a390F7FBC30f7BBE6",
// "0x2f7624b3fc0564C357F6AaCa9b5A0A5F3027827A",
// "0x9bc916A33d932dA04285c5A68d2D2E7BA333339b",
// "0x809d7703810152c0AC665406206F8C50630d0FcF",
// "0xCD0e39551Aba76A14fdac3c312192DFd141a3815",
// "0x76f48d7ab2081215155ff7e9f18b7d1e803c97de",
// "0xc65A0980B911f30D3bf30ADcFE33fA1141E17a58",
// "0x77F77D8c3833A851e33063B137E39Fb0f88D0314",
// "0x5a4Cd1BCc5189BDd55C65eF8eB965A86E09aE0C3"]