import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Search = ({ getQuery, placeholder }) => {
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

export default Search;

Search.propTypes = {
  getQuery: PropTypes.func,
  placeholder: PropTypes.string,
};

const Inputstyler = styled.input`
  width: 330px;
`;

const Formstyler = styled.form`
  input {
    background-size: 200% auto;
    background-image: var(--clr-button-rad);
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
