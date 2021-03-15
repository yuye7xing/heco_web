import React from 'react';

import gocLogo from '../../assets/img/goswap-GOC.svg';
import gosLogo from '../../assets/img/goswap-GOS.svg';
import gobLogo from '../../assets/img/goswap-GOB.svg';
import gotLogo from '../../assets/img/goswap-GOT.svg';
import USDTLogo from '../../assets/img/USDT.png';
import HUSDLogo from '../../assets/img/HUSD.png';
import BTCLogo from '../../assets/img/BTC.png';
import ETHLogo from '../../assets/img/ETH.png';
import HTLogo from '../../assets/img/HT.png';
import DOTLogo from '../../assets/img/DOT.png';
import BCHLogo from '../../assets/img/BCH.png';
import HPTLogo from '../../assets/img/HPT.png';
import LTCLogo from '../../assets/img/LTC.png';

const logosBySymbol: {[title: string]: string} = {
  'GOC': gocLogo,
  'GOB': gobLogo,
  'GOS': gosLogo,
  'GOT': gotLogo,
  'USDT': USDTLogo,
  'HUSD': HUSDLogo,
  'BTC': BTCLogo,
  'ETH': ETHLogo,
  'HT': HTLogo,
  'DOT': DOTLogo,
  'BCH': BCHLogo,
  'HPT': HPTLogo,
  'LTC': LTCLogo,
  'GOC_HUSD-LP': gocLogo,
  'GOS_HUSD-LP': gosLogo,
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Logo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
