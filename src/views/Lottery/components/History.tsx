import React, { useCallback,useMemo, useEffect, useState } from 'react';
import styled from 'styled-components';

import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import Label from '../../../components/Label';
import useGoFarm from '../../../hooks/useGoFarm';
import { Lottery } from '../../../go-farm';
import { BigNumber } from 'ethers';
import TokenInput from '../../../components/TokenInput'
import ModalActions from '../../../components/ModalActions'
import { getBalance } from '../../../utils/formatBalance'
import Button from '../../../components/Button'
import useWaterBuy from '../../../hooks/useWaterBuy';


interface HistoryProps {
  lottery: Lottery;
  max: BigNumber,
  waterBalance:BigNumber,
  poolBalance:BigNumber,
  ticket:BigNumber
}

const History: React.FC<HistoryProps> = ({ lottery,max, waterBalance,poolBalance,ticket}) => {
  const goFarm = useGoFarm();
  const [val, setVal] = useState('')
  const { waterBuy } = useWaterBuy(lottery);
  const fullBalance = useMemo(() => {
    return getBalance(max, 18).toFixed(2);
  }, [max,18])
  const haveticket=getBalance(ticket);
  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])
  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setVal(e.currentTarget.value)
  }, [setVal])
  
  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <Label text={`获取更多本源之水`} />
          <StyledCardHeader>
          <TokenInput
              value={val}
              onSelectMax={handleSelectMax}
              onChange={handleChange}
              max={fullBalance}
              symbol={'USDT'}
          />
             <ModalActions>
        <Button disabled={haveticket<1} text={haveticket>=1?'购买':'购券入场'}  onClick={() => waterBuy(val)} />
      </ModalActions>
          </StyledCardHeader>
        </StyledCardContentInner>
        <StyledCardContentInner>
          <StyledDetails>
            剩余Water池:   {getBalance(poolBalance)} Water &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            账户余额:   {getBalance(waterBalance)} Water
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledDetailsItem>
            <StyledDetailsItem>
              购买金额:
            </StyledDetailsItem>
            <StyledDetailsItem>
              单价:
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>第一档</StyledDetailsItem>
            <StyledDetailsItem>小于100USDT:</StyledDetailsItem>
            <StyledDetailsItem>1.0 Water/USDT
            </StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>第二档</StyledDetailsItem>
            <StyledDetailsItem>100USDT-500USDT:</StyledDetailsItem>
            <StyledDetailsItem>1.1 Water/USDT</StyledDetailsItem>
          </StyledDetails>
          <StyledDetails>
            <StyledDetailsItem>第三档</StyledDetailsItem>
            <StyledDetailsItem>大于500USDT:</StyledDetailsItem>
            <StyledDetailsItem>1.2 Water/USDT</StyledDetailsItem>
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
  width: 100%;
`;

export default History;
