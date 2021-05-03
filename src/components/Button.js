import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Button({ text, toggleDetails }) {
  return (
    <ButtonStyler>
      <button onClick={toggleDetails}>{text}</button>
    </ButtonStyler>
  );
}

Button.propTypes = {
  toggleDetails: PropTypes.func,
  text: PropTypes.string.isRequired,
};

const ButtonStyler = styled.div`
  button {
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
  button:hover {
    background-position: right center;
    color: var(--fc-primary);
    text-decoration: none;
  }
`;
