import React , { useCallback, useEffect, useState }from 'react';
import styled from 'styled-components';

import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useGoFarm from '../../../hooks/useGoFarm';
import { Lottery } from '../../../go-farm';

interface HistoryProps {
  lottery: Lottery;
}

const History: React.FC<HistoryProps> = ({ lottery }) => {
  const goFarm = useGoFarm();


  const [numbers, setNumbers] = useState(6000);

  const fetchStats = useCallback(async () => {
    const _numbers = await goFarm.ticketNumbers();
    setNumbers(3000-_numbers);
  }, [goFarm, setNumbers,lottery]);

  useEffect(() => {
    if (goFarm) {
      fetchStats().catch((err) => console.error(err.stack));
    }
  }, [goFarm, fetchStats]);


  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
            <Label text={`剩余门票`} />
          <StyledCardHeader>
            <Value value={numbers+''} />
          </StyledCardHeader>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default History;
