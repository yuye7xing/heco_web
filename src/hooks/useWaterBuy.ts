import { useCallback } from 'react';
import useGoFarm from './useGoFarm';
import { Lottery } from '../go-farm';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import { parseUnits } from 'ethers/lib/utils';
import { BigNumber } from 'ethers';

const useWaterBuy = (lottery: Lottery) => {
  const goFarm = useGoFarm();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleWaterBuy = useCallback(
    (amount: string) => {
      const amountBn = BigNumber.from(10).pow(18).mul(amount)
      handleTransactionReceipt(
        goFarm.buyWaterBuyUSDT(amountBn),
        `购买起源之水 `,
      );
    },
    [lottery, goFarm,handleTransactionReceipt],
  );

  return { waterBuy: handleWaterBuy};
};

export default useWaterBuy;
