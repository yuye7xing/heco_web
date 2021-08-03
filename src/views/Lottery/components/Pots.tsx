import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import useGoFarm from '../../../hooks/useGoFarm';
import { getBalance } from '../../../utils/formatBalance';
import { BigNumber } from 'ethers';
import { TotalPot, Allocations } from '../../../go-farm/types';

import { Lottery } from '../../../go-farm';

interface PotsProps {
  lottery: Lottery;
  waterByTicket:BigNumber
}

const Pots: React.FC<PotsProps> = ({ lottery, waterByTicket}) => {
  const goFarm = useGoFarm();

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
              60
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>前200:</StyledDetailsItem>
            <StyledDetailsItem>
              45
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>其他:</StyledDetailsItem>
            <StyledDetailsItem>
              30
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>
              已派发
            </StyledDetailsItem>
            <StyledDetailsItem>
            {getBalance(waterByTicket)}
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
