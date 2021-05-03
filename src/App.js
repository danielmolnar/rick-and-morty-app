import styled from 'styled-components';
import header from './assets/Logo.png';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Episodes from './pages/Episodes.js';
import Characters from './pages/Characters.js';
import FavoriteChars from './pages/FavoriteChars';
import HeaderNavigation from './components/HeaderNavigation';

function App() {
  return (
    <>
      <Header>
        <Logo src={header} alt="Rick and morty dashing out of a portal" />
        <HeaderNavigation
          NavText1="Home"
          NavText2="Characters"
          NavText3="Favorites"
          NavText4="Episodes"
        />
      </Header>
      <Wrapper>
        <Switch>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/favorites">
            <FavoriteChars />
          </Route>
          <Route path="/episodes">
            <Episodes />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 330px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Logo = styled.img`
  width: 175px;
  object-fit: contain;
`;
