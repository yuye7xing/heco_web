import React from 'react';
import styled from 'styled-components';

import Button from '../../../components/Button';
import Card from '../../../components/Card';
import CardContent from '../../../components/CardContent';
import CardIcon from '../../../components/CardIcon';
import { AddIcon } from '../../../components/icons';
import IconButton from '../../../components/IconButton';
import Label from '../../../components/Label';
import Value from '../../../components/Value';
import useGoFarm from '../../../hooks/useGoFarm';
import useTokenBalance from '../../../hooks/useTokenBalance';

import useApprove, { ApprovalState } from '../../../hooks/useApprove';
import useModal from '../../../hooks/useModal';
import useTicketBuy from '../../../hooks/useTicketBuy';
import useLotteryStakedBalance from '../../../hooks/useLotteryStakedBalance';
import useLotteryStatus from '../../../hooks/useLotteryStatus';

import { getDisplayBalance } from '../../../utils/formatBalance';

import BuyModal from './BuyModal';
import TokenSymbol from '../../../components/TokenSymbol';
import { Lottery } from '../../../go-farm';

interface DrawedProps {
  lottery: Lottery;
}

const Drawed: React.FC<DrawedProps> = ({ lottery }) => {
  const goFarm = useGoFarm();
  const [approveStatus, approve] = useApprove(
    lottery.depositToken,
    goFarm?.contracts['Lottery_'+lottery.depositTokenName].address,
  );

  const {numbers} = useLotteryStatus(lottery.depositTokenName);
  // const stakedBalance = useLotteryStakedBalance(lottery.depositTokenName);

  const { onTicketBuy } = useTicketBuy(lottery);

  const [onPresentDeposit, onDismissDeposit] = useModal(
    <BuyModal
      onConfirm={(val0,val1,val2,val3) => {
        onTicketBuy(val0,val1,val2,val3);
        onDismissDeposit();
      }}
      tokenName={lottery.depositTokenName}
    />,
  );

  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
            <Label text={`上期中奖号码`} />
          <StyledCardHeader>
            <Value value={numbers[0]} />
            <Value value={numbers[1]} />
            <Value value={numbers[2]} />
            <Value value={numbers[3]} />
          </StyledCardHeader>
          <StyledCardActions>
            {approveStatus === ApprovalState.APPROVED ||  lottery.depositTokenName === 'HT'? (
              <>
                <IconButton
                  disabled={lottery.finished}
                  onClick={() => (lottery.finished ? null : onPresentDeposit())}
                >
                  <AddIcon />
                </IconButton>
              </>
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

const LogoCard = styled.div`
  display: flex;
`;
const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
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

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export default Drawed;
