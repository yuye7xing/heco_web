import { useCallback, useEffect, useState } from 'react';

import { BigNumber } from 'ethers';
import useGoFarm from './useGoFarm';
import config from '../config';

const useTicketNum = () => {
  const [haveTicket, setHaveTicket] = useState(false);
  const goFarm = useGoFarm();

  const fetchBalance = useCallback(async () => {
    const haveTicket = await goFarm.ishaveTicket();
    setHaveTicket(haveTicket);
  }, [ goFarm]);

  useEffect(() => {
    if (goFarm?.isUnlocked) {
      fetchBalance().catch(err => console.error(err.stack));

      const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [ setHaveTicket, goFarm,fetchBalance]);

  return haveTicket;
};

export default useTicketNum;
