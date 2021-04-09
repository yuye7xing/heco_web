import React from 'react';
import styled from 'styled-components';

// import { Contract } from 'ethers';
import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import IconButton from '../../../components/IconButton';
import useGoFarm from '../../../hooks/useGoFarm';
import useModal from '../../../hooks/useModal';
import Button from '../../../components/Button';
import useLotteryTimes from '../../../hooks/useLotteryTimes';

// import useLotteryEarnings from '../../../hooks/useLotteryEarnings';
import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useLotteryStakedBalance from '../../../hooks/useLotteryStakedBalance';
import useTicketBuy from '../../../hooks/useTicketBuy';
import useLotteryStatus from '../../../hooks/useLotteryStatus';

import TokenSymbol from '../../../components/TokenSymbol';
import { Lottery } from '../../../go-farm';
import BuyModal from './BuyModal';

interface BuyTicketProps {
  lottery: Lottery;
}

const BuyTicket: React.FC<BuyTicketProps> = ({ lottery }) => {
  const goFarm = useGoFarm();
  const { prevEpochTime, nextEpochTime, epoch } = useLotteryTimes();
  // const earnings = useLotteryEarnings(lottery.depositTokenName);
  const tokenBalance = useLotteryStakedBalance(lottery.depositTokenName);
  const { onTicketBuy } = useTicketBuy(lottery);
  const [approveStatus, approve] = useApprove(
    lottery.depositToken,
    goFarm?.contracts['Lottery_'+lottery.depositTokenName].address,
  );
  console.log("epoch",epoch);
  const {userInfo} = useLotteryStatus(lottery.depositTokenName);
  console.log("userInfo",userInfo);

  const [onPresentBuy, onDismissDeposit] = useModal(
    <BuyModal
      onConfirm={(val0, val1, val2, val3) => {
        onTicketBuy(val0, val1, val2, val3);
        onDismissDeposit();
      }}
      tokenName={lottery.depositTokenName}
    />,
  );

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>
              <TokenSymbol symbol={lottery.earnToken.symbol} />
            </CardIcon>
            <LabelItem>
              <Label text={`你的本期${lottery.depositTokenName}船票:`} />
              <Value value={userInfo.length.toString()} />
            </LabelItem>
          </StyledCardHeader>
          <StyledCardActions>
          {approveStatus === ApprovalState.APPROVED ? (
            <Button
              disabled={epoch !== 0}
              onClick={() => (epoch !== 0 ? null : onPresentBuy())}
              text={epoch === 0 ? "购买船票" : "等待下一轮开始"}
            />
            ) : (
              <Button
                disabled={
                  approveStatus === ApprovalState.PENDING ||
                  approveStatus === ApprovalState.UNKNOWN
                }
                onClick={approve}
                text={`批准 ${lottery.depositTokenName}`}
              />
            )}
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  );
};
const LabelItem = styled.div`
  margin-left: 15px;
`;
const StyledCardHeader = styled.div`
  align-items: flex-start;
  display: flex;
  width: 100%;
`;
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`;

// const StyledActionSpacer = styled.div`
//   height: ${(props) => props.theme.spacing[4]}px;
//   width: ${(props) => props.theme.spacing[4]}px;
// `;
// const StyledSpacer = styled.div`
//   height: ${(props) => props.theme.spacing[4]}px;
//   width: ${(props) => props.theme.spacing[4]}px;
// `;

const StyledCardContentInner = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default BuyTicket;
