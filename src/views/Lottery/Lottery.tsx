import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import useLotterys from '../../hooks/useLotterys';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import BuyTicket from './components/BuyTicket';
import Drawed from './components/Drawed';
import Reward from './components/Reward';
import Pots from './components/Pots';
import History from './components/History';
import useLottery from '../../hooks/useLottery';
import useGoFarm from '../../hooks/useGoFarm';
import config from '../../config';

const Lottery: React.FC = () => {
  const goFarm = useGoFarm();
  const [lotterys] = useLotterys();
  console.log(lotterys);
  const lottery = useLottery(lotterys[0].depositTokenName);
  const { account } = useWallet();

  const [rewards, setRewards] = useState([]);
  const [rewardAmount, setRewardAmount] = useState([]);
  const [rewardIndex, setRewardIndex] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [tickets, setTickets] = useState([]);

  // const [allowance, setAllowance] = useState(BigNumber.from(0));

  const fetchInfo = useCallback(async () => {
 
  }, [goFarm, lottery, setTickets, setNumbers, setRewards, setRewardAmount, setRewardIndex]);

  useEffect(() => {
    if (goFarm?.myAccount) {
      fetchInfo().catch((err) => console.error(err.stack));
      const refreshBalance = setInterval(fetchInfo, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [goFarm?.myAccount, fetchInfo]);
  return account && lottery ? (
    <>
      <PageHeader
        subtitle={`文明争霸，谁主浮沉`}
        title='创世纪入场券'
      />
      <StyledBank>
        <StyledCardsWrapper>
          <StyledCardWrapper>
            <BuyTicket lottery={lottery} tickets={tickets} numbers={numbers} />
          </StyledCardWrapper>
          <Spacer />
          <StyledCardWrapper2>
            <StyledCardWrapper>
              <Drawed lottery={lottery} />
            </StyledCardWrapper>
            <StyledCardWrapper>
              <Pots lottery={lottery} />
            </StyledCardWrapper>
          </StyledCardWrapper2>
        </StyledCardsWrapper>
        {rewards.length > 0 && (
          <React.Fragment>
            <Spacer />
            <StyledCardWrapper3>
              <Reward
                lottery={lottery}
                rewards={rewards}
                rewardAmount={rewardAmount}
                rewardIndex={rewardIndex}
              />
            </StyledCardWrapper3>
          </React.Fragment>
        )}
        <Spacer />
        <StyledCardWrapper3>
          <History lottery={lottery} />
        </StyledCardWrapper3>
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

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
const StyledCardWrapper2 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledCardWrapper3 = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Lottery;
