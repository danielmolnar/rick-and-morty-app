import { useState } from 'react';
import Cards from '../components/Cards.js';
import loadFromLocal from '../lib/loadFromLocal';

export default function FavoriteChars() {
  // eslint-disable-next-line
  const [favouriteCards, setFavouriteCards] = useState(
    loadFromLocal('favoriteChars') ?? []
  );
  return (
    <>
      {favouriteCards.map(({ name, species, origin, image, id }) => (
        <Cards
          key={id}
          name={name}
          species={species}
          origin={origin}
          image={image}
        />
      ))}
    </>
  );
}
