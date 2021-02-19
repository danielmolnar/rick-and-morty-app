import Cards from './Cards.js';
import styled from 'styled-components';
// import Button from './Button';
import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.png';

function App() {
  const [cardInfos, setCardInfos] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((result) => result.json())
      .then((items) => {
        const characters = items.results.map((item) => ({
          name: item.name,
          species: item.species,
          origin: item.origin.name,
          image: item.image,
        }));
        setCardInfos(characters);
      });
  }, []);

  return (
    <Wrapper className="App">
      <Logo></Logo>
      {cardInfos.map(({ name, species, origin, image }) => (
        <Cards name={name} species={species} origin={origin} image={image} />
      ))}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 2rem;
  gap: 1rem;
`;

const Logo = styled.header`
  background-image: url(${logo});
`;
