import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useWallet } from 'use-wallet';
import useLotterys from '../../hooks/useLotterys';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import Spacer from '../../components/Spacer';
import BuyTicket from './components/BuyTicket';
import Drawed from './components/Drawed';
import Reward from './components/Reward';
import Pots from './components/Pots';
import History from './components/History';
import useLottery from '../../hooks/useLottery';
import useGoFarm from '../../hooks/useGoFarm';
import config from '../../config';
import ticketBG from '../../assets/img/ticketBG.jpg';


const Lottery: React.FC = () => {
  const goFarm = useGoFarm();
  const [lotterys] = useLotterys();
  const { account } = useWallet();
  let depositTokenName='HUSD';
  if(lotterys.length>0){
    depositTokenName=lotterys[0].depositTokenName;
  }
  const lottery = useLottery(depositTokenName);
  
  
  const [numbers, setNumbers] = useState([]);
  const [tickets, setTickets] = useState([]);


  const fetchInfo = useCallback(async () => {
    console.log("定时获取相关信息");
    




  }, [goFarm]);

  useEffect(() => {
    if (goFarm?.myAccount) {
      fetchInfo().catch((err) => console.error(err.stack));
      const refreshBalance = setInterval(fetchInfo, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [goFarm?.myAccount, fetchInfo]);
  return  (
    <Background>
    <Switch>
      <Page>
      <PageHeader
        subtitle={`文明争霸，谁主浮沉`}
        title='欢迎来到创世纪'
      />
      {account&&lottery ? (
        <StyledBank>
         <StyledCardsWrapper>
         
          <StyledCardWrapper2>
            <StyledCardWrapper>
              <Drawed lottery={lottery} />
            </StyledCardWrapper>
            <StyledCardWrapper>
              <Pots lottery={lottery} />
            </StyledCardWrapper>
          </StyledCardWrapper2>
          <Spacer />
          <StyledCardWrapper>
            <BuyTicket lottery={lottery} tickets={tickets} numbers={numbers} />
          </StyledCardWrapper>
        </StyledCardsWrapper>
        <Spacer />
      </StyledBank>
      ): (
    <UnlockWallet />
  )}
      </Page>
      </Switch>
    </Background>
  ) 
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
    align-items: center;  
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
const Background = styled.div`
background: url(${ticketBG});
background-repeat: no-repeat;
background-attachment: fixed;
width: 100%;
background-size: cover;
z-index: 0;
height: 100%;
position: relative;
  }
`;
export default Lottery;
