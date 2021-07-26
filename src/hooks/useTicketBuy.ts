import { useCallback } from 'react';
import useGoFarm from './useGoFarm';
import { Lottery } from '../go-farm';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';

const useTicketBuy = (lottery: Lottery) => {
  const goFarm = useGoFarm();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const handleTicketBuy = useCallback(
    () => {
      handleTransactionReceipt(
        goFarm.BuyTicket(),
        `购买入场券 `,
      );
    },
    [lottery, goFarm,handleTransactionReceipt],
  );
  return { onTicketBuy: handleTicketBuy };
};

export default useTicketBuy;
