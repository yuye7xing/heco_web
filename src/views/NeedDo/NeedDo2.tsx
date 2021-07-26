import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import { useWallet } from 'use-wallet';
import styled from 'styled-components';
import background_2 from '../../assets/img/b4.jpg';

const Farms: React.FC = () => {
  const { path } = useRouteMatch();
  const { account, connect } = useWallet();

  return (
    <Background>
    <Switch>
      <Page>
        <Route exact path={path}>
          <PageHeader
            title="文明"
            subtitle="胜者为王，败者流放，谁主沉浮"
          />
            <Center>
                <CenterTitle>本功能完成部落争霸赛后将对外开放</CenterTitle>
            </Center>
        </Route>
      </Page>
    </Switch>
    </Background>
  );
};

const Background = styled.div`
background: url(${background_2});
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
const CenterTitle = styled.h5`
  color: ${props => props.theme.color.grey[100]};
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-shadow: 3px 3px 3px #000000;
`

export default Farms;
