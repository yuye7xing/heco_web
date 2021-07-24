import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Lottery from '../Lottery';
import LotteryCards from './LotteryCards';
import { useWallet } from 'use-wallet';
import Button from '../../components/Button';
import styled from 'styled-components';
import ticketBG from '../../assets/img/ticketBG.jpg';

const Lotterys: React.FC = () => {
  const { path } = useRouteMatch();
  const { account, connect } = useWallet();

  return (
    <Background>
      <Switch>
        <Page>
          <Route exact path={path}>
            <PageHeader
              title="选择船票."
              subtitle="通过选择号码赢到幸运船票"
            />
            {!!account ? (
              <React.Fragment>
                <LotteryCards />
              </React.Fragment>
            ) : (
              <Center>
                <Button onClick={() => connect('injected')} text="解锁钱包" />
              </Center>
            )}
          </Route>
          <Route path={`${path}/:lotteryId`}>
            <Lottery />
          </Route>
        </Page>
      </Switch>
    </Background>
  );
};

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
const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Lotterys;
