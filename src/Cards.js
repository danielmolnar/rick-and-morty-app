import React from 'react';
import styled from 'styled-components';
import card_background from './card_background.jpg';
// import schwifty from './font/schwifty.ttf';

export default function Cards({ name, species, origin, image }) {
  return (
    <CardWrapper>
      <img src={image} alt="this is {name}" />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{origin}</p>
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
  padding: 0.7rem;
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
