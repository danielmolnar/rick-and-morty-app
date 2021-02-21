import Cards from './Cards.js';
import styled from 'styled-components';
import Button from './Button';
import React from 'react';
import { useState, useEffect } from 'react';
import header from '../src/logo.png';

function App() {
  const [cardInfos, setCardInfos] = useState([]);
  const [isHuman, setIsHuman] = useState([]);
  const [isAlien, setIsAlien] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((result) => result.json())
      .then((items) => {
        const characters = items.results.map((item) => ({
          id: item.id,
          name: item.name,
          species: item.species,
          origin: item.origin.name,
          image: item.image,
        }));
        setCardInfos(characters);
      });
  }, []);

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
  }

  function showAliens() {
    const alien = cardInfos.filter(
      (currywurst) => currywurst.species === 'Alien'
    );
    setIsAlien(alien);

    // console.log(alien);
  }

  let data;

  if (isHuman.length > isAlien.length) {
    data = isHuman;
  } else if (isHuman.length < isAlien.length) {
    data = isAlien;
  } else {
    data = cardInfos;
  }

  // let data = isHuman.length > 0 ? isHuman : cardInfos;
  // data = isAlien.length > 0 ? isAlien : cardInfos;

  return (
    <>
      <Header>
        <Logo src={header} alt="This is the Logo" />
      </Header>

      <Wrapper className="App">
        <Button text="Filter Humans" currywurstFunktion={showHumans} />
        <Button text="Filter Aliens" currywurstFunktion={showAliens} />
        <Button text="Show All" currywurstFunktion={showAll} />
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
