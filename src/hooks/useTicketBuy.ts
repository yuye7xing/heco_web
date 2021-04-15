import { useCallback } from 'react';
import useGoFarm from './useGoFarm';
import { Lottery } from '../go-farm';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useTicketBuy = (lottery: Lottery) => {
  const goFarm = useGoFarm();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleTicketBuy = useCallback(
    (val0: string, val1: string, val2: string, val3: string, num: string) => {
      handleTransactionReceipt(
        goFarm.BuyTicket(lottery.depositTokenName,val0,val1,val2,val3, num),
        `购买 ${num} 张 ${lottery.depositTokenName} 船票, 幸运号码为: ${val0},${val1},${val2},${val3} `,
      );
    },
    [lottery, goFarm,handleTransactionReceipt],
  );
  return { onTicketBuy: handleTicketBuy };
};

export default useTicketBuy;
