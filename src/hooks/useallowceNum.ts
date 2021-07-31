import { useCallback, useEffect, useState } from 'react';

import { BigNumber } from 'ethers';
import useGoFarm from './useGoFarm';
import config from '../config';

// const useTicketNum = () => {
//   const [allowceNum, setAllowceNum] = useState(BigNumber.from(0));
//   const goFarm = useGoFarm();

//   const fetchBalance = useCallback(async () => {
//     const allowceNum = await token.allowance(account, spender);
//     setHaveTicket(haveTicket);
//   }, [ goFarm]);

//   useEffect(() => {
//     if (goFarm?.isUnlocked) {
//       fetchBalance().catch(err => console.error(err.stack));

//       const refreshBalance = setInterval(fetchBalance, config.refreshInterval);
//       return () => clearInterval(refreshBalance);
//     }
//   }, [ setHaveTicket, goFarm,fetchBalance]);

//   return haveTicket;
// };

// export default useTicketNum;
