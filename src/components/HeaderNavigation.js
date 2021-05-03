import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function HeaderNavigation({
  NavText1,
  NavText2,
  NavText3,
  NavText4,
}) {
  return (
    <NavContainer>
      <NavLink exact to="../pages/">
        {NavText1}
      </NavLink>
      <NavLink to="../pages/characters">{NavText2}</NavLink>
      <NavLink to="../pages/FavoriteChars">{NavText3}</NavLink>
      <NavLink to="../pages/episodes">{NavText4}</NavLink>
    </NavContainer>
  );
}

HeaderNavigation.propTypes = {
  NavText1: PropTypes.string,
  NavText2: PropTypes.string,
  NavText3: PropTypes.string,
  NavText4: PropTypes.string,
};

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 330px;
  gap: 0.3rem;

  a {
    background-size: 200% auto;
    background-image: var(--clr-button-rad);
    border-radius: 10px;
    color: var(--fc-primary);
    display: block;
    font-size: 1rem;
    padding: 0.3rem;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;
  }

  a:hover {
    background-position: right center;
    color: var(--fc-primary);
    text-decoration: none;
  }
`;
