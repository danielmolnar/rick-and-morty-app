import React from 'react';
import styled from 'styled-components';

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
