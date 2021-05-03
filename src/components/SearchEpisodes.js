import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchEpisodes = ({ getQuery, placeholder }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <Formstyler>
      <Inputstyler
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </Formstyler>
  );
};

export default SearchEpisodes;

SearchEpisodes.propTypes = {
  getQuery: PropTypes.func,
  placeHolder: PropTypes.string,
};

const Inputstyler = styled.input`
  width: 330px;
`;

const Formstyler = styled.form`
  input {
    background-image: var(--clr-button-rad);
    background-size: 200% auto;
    border: none;
    border-radius: 10px;
    color: var(--fc-primary);
    display: block;
    font-size: 1rem;
    padding: 0.3rem;
    text-align: center;
    text-decoration: none;
    transition: 0.5s;
  }
  input:hover {
    background-position: right center;
    color: var(--fc-primary);
    text-decoration: none;
  }

  input:focus {
    outline: none;
  }
`;
