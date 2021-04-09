import React from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Label from '../../components/Label';
import Spacer from '../../components/Spacer';
import BuyTicket from './components/BuyTicket';
import Drawed from './components/Drawed';
import useLottery from '../../hooks/useLottery';
// import useLotteryRedeem from '../../hooks/useLotteryRedeem';

const Lottery: React.FC = () => {
  // useEffect(() => window.scrollTo(0, 0))

  const { lotteryId } = useParams();
  const lottery = useLottery(lotteryId);
  const { account } = useWallet();
  // const { onRedeem } = useLotteryRedeem(lottery);

  return account && lottery ? (
    <>
      <PageHeader
        // icon={<img src={require("../../assets/img/farm.png")} width="80%" height="90%" alt="farms" style={{position: "absolute",top: "5%",left:"10%"}}/>}
        subtitle={`通过 ${lottery?.depositTokenName} 购买船票,有机会赢取大奖`}
        title={lottery?.name}
      />
      <StyledBank>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <BuyTicket lottery={lottery} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper>
            <Drawed lottery={lottery} />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer size="lg" />
        <div>
          <Label color={'#fff'} text={`每张船票价值 1${lottery.depositTokenName},在1~14之内选择4个数字作为幸运号码!`} />
          <Button  text="取出全部资产" />
        </div>
        <Spacer size="lg" />
      </StyledBank>
    </>
  ) : (
    <UnlockWallet />
  );
};


const UnlockWallet = () => {
  const { connect } = useWallet();
  return (
    <Center>
      <Button onClick={() => connect('injected')} text="解锁钱包" />
    </Center>
  );
};
// const StyledIcon = styled.div`
//   font-size: 28px;
//   width:24px;
//   height:24px;
//   padding-left:10px;
//   padding-right:5px;
// `;
const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// const StyledUniswapLPGuide = styled.div`
//   margin: -24px auto 48px;
// `;

// const StyledLink = styled.a`
//   font-weight: 700;
//   text-decoration: none;
//   display: inherit;
//   color: ${(props) => props.theme.color.primary.main};
// `;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Lottery;
