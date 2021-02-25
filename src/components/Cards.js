import React from 'react';
import styled from 'styled-components';
import card_background from '../img/card_background.jpg';
import Button from './Button';
import { useState } from 'react';
import CharDetails from './CharDetails';

export default function Cards({
  name,
  species,
  origin,
  image,
  text,
  currywurstFunktion,
}) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  function toggleDetails() {
    setIsShowingDetails(!isShowingDetails);
    console.log('I was clicked');
  }

  return (
    <CardWrapper>
      <ImageWrapper src={image} alt="this is {name}" />
      <TitleWrapper>
        <h2>{name}</h2>
        <CharDetails
          species={species}
          origin={origin}
          details={isShowingDetails}
        />
        <Button currywurstFunktion={toggleDetails} text="Show more" />
      </TitleWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: black solid 1px;
  background-image: url(${card_background});
  background-size: cover;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  /* margin-left: 10%;
  margin-right: 10%; */
  width: 350px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;

const ImageWrapper = styled.img`
  border-radius: 10px;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
`;

// const Headline = styled.h2`
//   font-family: schwifty;
// `

// @font-face {
//   font-family: schwifty;
//   src: url(${schwifty}) format('truetype');
//   font-weight: normal;
//   font-style: normal;
//   }

//   h2 {
//     font-family: get-schwifty, Helvetica, Arial, sans-serif;;
//   }

// `;
