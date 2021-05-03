import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import saveToLocal from '../lib/saveToLocal';
import Button from '../components/Button';
import Search from '../components/Search';
import Cards from '../components/Cards.js';
import loadFromLocal from '../lib/loadFromLocal';

export default function Characters() {
  const [cardInfos, setCardInfos] = useState([]);
  const [isHuman, setIsHuman] = useState([]);
  const [isAlien, setIsAlien] = useState([]);
  const [query, setQuery] = useState('');
  const [isChecked, setIsChecked] = useState(
    loadFromLocal('favoriteChars') ?? []
  );

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const characters = result.data.results.map((item) => ({
        id: item.id,
        image: item.image,
        name: item.name,
        origin: item.origin.name,
        species: item.species,
      }));
      setCardInfos(characters);
    };
    fetchItems();
  }, [query]);

  useEffect(() => {
    saveToLocal('favoriteChars', isChecked);
  }, [isChecked]);

  function toggleCheckbox(idToToggle) {
    const favouriteCard = cardInfos.filter((card) => card.id === idToToggle);
    setIsChecked([...isChecked, ...favouriteCard]);
  }

  function showAll() {
    setIsHuman([]);
    setIsAlien([]);
    setCardInfos(cardInfos);
  }

  function showHumans() {
    const humans = cardInfos.filter((human) => human.species === 'Human');
    setIsHuman(humans);
    setIsAlien([]);
  }

  function showAliens() {
    const alien = cardInfos.filter((alien) => alien.species === 'Alien');
    setIsAlien(alien);
    setIsHuman([]);
  }

  let data;
  let oldAlienData = cardInfos.filter((data) => data.species === 'Alien');
  let oldHumanData = cardInfos.filter((data) => data.species === 'Human');

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
      <Search
        getQuery={(q) => setQuery(q)}
        placeholder="Search for Character"
      />
      <ButtonWrapper>
        <Button text="Filter Humans" toggleDetails={showHumans} />
        <Button text="Filter Aliens" toggleDetails={showAliens} />
        <Button text="Show All" toggleDetails={showAll} />
      </ButtonWrapper>

      {data.map(({ name, species, origin, image, id }) => (
        <Cards
          image={image}
          key={id}
          name={name}
          onChangeFunction={() => toggleCheckbox(id)}
          origin={origin}
          species={species}
        />
      ))}
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  gap: 0.3rem;
  height: 30px;
  width: 330px;
`;
