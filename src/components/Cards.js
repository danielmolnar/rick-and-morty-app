import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import CharDetails from './CharDetails';
import FavoriteCheckBox from './FavoriteCheckBox';
import CardBackground from '../assets/CardBackground.jpg';

export default function Cards({
  name,
  image,
  origin,
  species,
  onChangeFunction,
}) {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  return (
    <CardWrapper>
      <CheckboxWrapper>
        <FavoriteCheckBox
          onChangeFunction={onChangeFunction}
          CheckboxText="Favorite"
        />
      </CheckboxWrapper>
      <ImageWrapper src={image} alt="this is {name}" />
      <TitleWrapper>
        <h2>{name}</h2>
        <CharDetails
          species={species}
          origin={origin}
          details={isShowingDetails}
        />
        <Button
          toggleDetails={() => setIsShowingDetails(!isShowingDetails)}
          text={isShowingDetails ? 'Hide Details' : 'Show More'}
        />
      </TitleWrapper>
    </CardWrapper>
  );
}

Cards.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  origin: PropTypes.string,
  species: PropTypes.string,
  onChangeFunction: PropTypes.func,
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${CardBackground});
  background-size: cover;
  border-radius: 10px;
  box-shadow: var(--bs);
  color: var(--fc-primary);
  padding: 1rem;
  width: 330px;
`;

const ImageWrapper = styled.img`
  border-radius: 10px;
  width: 250px;
`;

const TitleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--clr-bg-opac);
  margin-top: 1rem;
  padding: 1rem;
  width: 330px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
`;
