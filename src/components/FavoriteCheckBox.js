import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function FavoriteCheckBox({ onChangeFunction, CheckboxText }) {
  return (
    <Wrapper>
      <p>{CheckboxText}</p>
      <label>
        {' '}
        <>
          <input type="checkbox" onChange={onChangeFunction} />
          <span></span>
        </>
      </label>
    </Wrapper>
  );
}

FavoriteCheckBox.propTypes = {
  CheckboxText: PropTypes.string,
  onChangeFunction: PropTypes.func,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
  margin: 0;
  margin-right: 1.5rem;
  padding: 0;
  width: 300px;

  p {
    font-size: 0.7rem;
  }

  input {
    position: absolute;
    visibility: hidden;
  }

  span {
    background-color: var(--clr-span-pri);
    border-radius: 20px;
    cursor: pointer;
    display: block;
    height: 15px;
    position: relative;
    transition: 500ms;
    width: 30px;
  }

  span:before {
    background: var(--clr-span-sec);
    border-radius: 50%;
    box-shadow: var(--bs2);
    content: '';
    height: 16px;
    position: absolute;
    transition: 500ms;
    width: 16px;
  }

  input[type='checkbox']:checked ~ span {
    background: var(--clr-bg-checkb);
  }

  input[type='checkbox']:checked ~ span:before {
    transform: translateX(20px);
  }
`;
