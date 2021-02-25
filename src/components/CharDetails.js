import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

export default function CharDetails({ species, origin, details }) {
  return (
    <div>
      {details && (
        <>
          <PeWrapper>{species}</PeWrapper>
          <PeWrapper>{origin}</PeWrapper>
        </>
      )}
    </div>
  );
}

const PeWrapper = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

CharDetails.propTypes = {
  details: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,

}
