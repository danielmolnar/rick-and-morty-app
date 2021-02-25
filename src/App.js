
import styled from 'styled-components';
import React from 'react';
import header from './img/logo.png';

import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

import HeaderNavigation from './components/HeaderNavigation'
import Characters from './pages/Characters.js';


function App() {


  return (
    <>
      <Header>
        <Logo src={header} alt="This is the Logo" />
        <HeaderNavigation />
      </Header>

      <Wrapper className="App">
        <Characters />
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  gap: 1rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 15px 10px;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
`;

const Logo = styled.img`
  // margin-left: 10%;
  // margin-right: 10%;
  // width: 0 auto;
  width: 300px;
`;


