import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Vault from '../Vault';
import VaultCards from './VaultCards';
import { useWallet } from 'use-wallet';
import Button from '../../components/Button';
import styled from 'styled-components';
import background_3 from '../../assets/img/background_3.jpg';

const Vaults: React.FC = () => {
  const { path } = useRouteMatch();
  const { account, connect } = useWallet();

  return (
    <Background>
    <Switch>
      <Page>
        <Route exact path={path}>
          <PageHeader
            title="创世纪"
            subtitle="五行相生，世界生成"
          />
          {!!account ? (
            <VaultCards />
          ) : (
            <Center>
              <Button onClick={() => connect('injected')} text="解锁钱包" />
            </Center>
          )}
        </Route>
        <Route path={`${path}/:vaultId`}>
          <Vault />
        </Route>
      </Page>
    </Switch>
    </Background>
  );
};

const Background = styled.div`
background: url(${background_3});
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

export default Vaults;
