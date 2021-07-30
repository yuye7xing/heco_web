import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import useGoFarm from '../../../hooks/useGoFarm';
import { getDisplayBalance } from '../../../utils/formatBalance';
import { BigNumber } from 'ethers';
import { TotalPot, Allocations } from '../../../go-farm/types';

import { Lottery } from '../../../go-farm';

interface PotsProps {
  lottery: Lottery;
}

const Pots: React.FC<PotsProps> = ({ lottery }) => {
  const goFarm = useGoFarm();

  const [totalPot, setStats] = useState<string>();


  const fetchStats = useCallback(async () => {
    const [_totalPot, _allocations] = await Promise.all([
      goFarm.getTotalPot(),
    ]);
    setStats(_totalPot);
  }, [goFarm, setStats]);

  useEffect(() => {
    if (goFarm) {
      fetchStats().catch((err) => console.error(err.stack));
    }
  }, [goFarm, fetchStats]);

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledDetails>
            购票附赠起源之水:
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>前100:</StyledDetailsItem>
            <StyledDetailsItem>
              20
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>前500:</StyledDetailsItem>
            <StyledDetailsItem>
              10
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>其他:</StyledDetailsItem>
            <StyledDetailsItem>
              5
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>
              已分发
            </StyledDetailsItem>
            <StyledDetailsItem>
            {totalPot}
            </StyledDetailsItem>
          </StyledDetails>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};

const StyledDetailsItem = styled.div`
  display: flex;
`;

const StyledDetails = styled.div`
  margin-bottom: ${(props) => props.theme.spacing[2]}px;
  margin-top: ${(props) => props.theme.spacing[0]}px;
  text-align: center;
  color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Pots;
