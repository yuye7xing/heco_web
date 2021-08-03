import { useCallback, useEffect, useState } from 'react';
import { useWallet } from 'use-wallet';
import { BigNumber } from 'ethers';
import ERC20 from '../go-farm/ERC20';
import config from '../config';

const useAllowance = (token: ERC20, spender: string, pendingApproval?: boolean) => {
  const [allowance, setAllowance] = useState<BigNumber>(null);
  const { account } = useWallet();

  const fetchAllowance = useCallback(async () => {
    try{
      const allowance = await token.allowance(account, spender);
      setAllowance(allowance);
    }catch (error) {
      console.log("未授权");
    }
    // console.log(`Allowance: ${allowance.toString()} ${token.symbol} for ${spender}`);
    
  }, [account, spender, token]);

  useEffect(() => {
    if (account && spender && token) {
      fetchAllowance().catch((err) => console.log(`Failed to fetch allowance: ${err.stack}`));
      const refreshBalance = setInterval(fetchAllowance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [account, spender, token, pendingApproval,fetchAllowance]);

  return allowance;
};

export default useAllowance;
