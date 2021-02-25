import Cards from './components/Cards.js';
import styled from 'styled-components';
import Button from './components/Button';
import React from 'react';
import { useState, useEffect } from 'react';
import header from './img/logo.png';
import Search from './components/Search';
import axios from 'axios';
import HeaderNavigation from './components/HeaderNavigation'
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  const [cardInfos, setCardInfos] = useState([]);
  const [isHuman, setIsHuman] = useState([]);
  const [isAlien, setIsAlien] = useState([]);
  const [query, setQuery] = useState('');
  //  Query in Fetch einfügen und neuen useState anlegen

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const characters = result.data.results.map((item) => ({
        id: item.id,
        name: item.name,
        species: item.species,
        origin: item.origin.name,
        image: item.image,
      }));
      console.log(result.data.results);
      setCardInfos(characters);
    };
    fetchItems();
  }, [query]);

  // useEffect(() => {
  //   fetch(`https://rickandmortyapi.com/api/character/?species=${query}`)
  //     .then((result) => result.json())
  //     .then((items) => {
  //       const characters = items.results.map((item) => ({
  //         id: item.id,
  //         name: item.name,
  //         species: item.species,
  //         origin: item.origin.name,
  //         image: item.image,
  //       }));
  //       setCardInfos(characters);
  //     });
  // }, [query]);

  // Wenn der Wert query geändert wird, wird der useEffect ausgelöst
  function showAll() {
    setIsHuman([]);
    setIsAlien([]);
    setCardInfos(cardInfos);
  }

  function showHumans() {
    const humans = cardInfos.filter(
      (currywurst) => currywurst.species === 'Human'
    );
    setIsHuman(humans);
    setIsAlien([]);
  }

  function showAliens() {
    const alien = cardInfos.filter(
      (currywurst) => currywurst.species === 'Alien'
    );
    setIsAlien(alien);
    setIsHuman([]);
  }

  let data;
  let oldAlienData = cardInfos.filter(
    (currywurst) => currywurst.species === 'Alien'
  );
  let oldHumanData = cardInfos.filter(
    (currywurst) => currywurst.species === 'Human'
  );

  if (isHuman.length > 0) {
    data = isHuman;
  } else if (isAlien.length > 0) {
    data = isAlien;
  } else if (isHuman.length === 0 && isAlien.length !== 0) {
    data = oldHumanData;
  } else if (isAlien.length === 0 && isHuman.length !== 0) {
    data = oldAlienData;
  } else {
    data = cardInfos;
  }

  return (
    <>
      <Header>
        <Logo src={header} alt="This is the Logo" />
        <HeaderNavigation />
      </Header>

      <Wrapper className="App">
        <Search getQuery={(q) => setQuery(q)} />
        {/*  8. q wird zur Search.js durchgereicht und ruft setQuery auf App.js ebene auf */}
        <ButtonWrapper>
          <Button text="Filter Humans" currywurstFunktion={showHumans} />
          <Button text="Filter Aliens" currywurstFunktion={showAliens} />
          <Button text="Show All" currywurstFunktion={showAll} />
        </ButtonWrapper>
        {data.map(({ name, species, origin, image, id }) => (
          <Cards
            key={id}
            name={name}
            species={species}
            origin={origin}
            image={image}
          />
        ))}
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

const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background: none;
  opacity: 1;
  height: 30px;
  width: auto;
  border-radius: 10px;
`;
