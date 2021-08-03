import { useCallback, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import { BigNumber } from 'ethers';
import useGoFarm from './useGoFarm';
import config from '../config';
import ERC20 from '../go-farm/ERC20';

const useAllowceNum = (token: ERC20, spender: string, pendingApproval?: boolean)  => {
  const [allowceNum, setAllowceNum] = useState(BigNumber.from(0));
  const goFarm = useGoFarm();
  const { account } = useWallet();

  const fetchBalance = useCallback(async () => {
    const allowceNum = await token.allowance(account, spender);
    setAllowceNum(allowceNum);
  }, [ goFarm]);

  useEffect(() => {
    if (goFarm?.isUnlocked) {
      fetchBalance().catch(err => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [ setAllowceNum, goFarm,fetchBalance]);

  return allowceNum;
};

export default useAllowceNum;
