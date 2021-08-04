import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import TimeLine from './components/TimeLine';
import background_2 from '../../assets/img/ticketBG.jpg';

const Home: React.FC = () => {  
  return (
    <Background>
      <Page>
        <PageHeader
          title="欢迎来到纪元!"
          subtitle="节点时间里程碑"
        />
        <Spacer size="md" />
        <TimeLine></TimeLine>
      </Page>
    </Background>
  );
};
const Background = styled.div`
  background: url(${background_2});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export default Home;
