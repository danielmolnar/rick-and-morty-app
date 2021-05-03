import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function CharDetails({ species, origin, details }) {
  return (
    <div>
      {details && (
        <>
          <CharWrapper>{species}</CharWrapper>
          <CharWrapper>{origin}</CharWrapper>
        </>
      )}
    </div>
  );
}

CharDetails.propTypes = {
  details: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
};

const CharWrapper = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;
