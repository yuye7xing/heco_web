import { useCallback, useEffect, useState } from 'react';
import useGoFarm from './useGoFarm';
const useLotteryStatus = (name: string) => {
  const [numbers, setNumbers] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const goFarm = useGoFarm();

  const fetchNumbers = useCallback(async () => {
    const [_userNumbers, _userInfo] = await Promise.all([goFarm.ticketNumbers(name), goFarm.getUserInfo(name)]);
    setNumbers(_userNumbers);
    setUserInfo(_userInfo);
  }, [ name,goFarm]);

  useEffect(() => {
    if (goFarm) {
      fetchNumbers().catch(err => console.error(err.stack));
    }
  }, [goFarm]);
  return {numbers,userInfo};
};

export default useLotteryStatus;
