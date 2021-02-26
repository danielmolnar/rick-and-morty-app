import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import saveToLocal from '../lib/saveToLocal';
import Button from '../components/Button';
import Cards from '../components/Cards.js';
import Search from '../components/Search';
import loadFromLocal from '../lib/loadFromLocal';



export default function FavoriteChars() {

    const [favouriteCards, setFavouriteCards] = useState(loadFromLocal('favoriteChars'), [])

    useEffect(() => saveToLocal('favoriteChars', favouriteCards), [favouriteCards])






    return (
        <>

            {
                favouriteCards.map(({ name, species, origin, image, id }) => (
                    <Cards
                        key={id}
                        name={name}
                        species={species}
                        origin={origin}
                        image={image}
                    />
                ))
            }
        </>

    )
}