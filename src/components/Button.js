import PropTypes from 'prop-types'

import styled from 'styled-components';

import React from 'react';

export default function Button({ text, currywurstFunktion }) {
  return <ButtonStyler onClick={currywurstFunktion}>{text}</ButtonStyler>;
}

const ButtonStyler = styled.button`
  border-radius: 10px;
  background-color: limegreen;
  border: none;
  color: white;
  font-size: 1.2rem;
`;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  currywurstFunktion: PropTypes.func,
}
