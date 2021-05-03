import PropTypes from 'prop-types';
import styled from 'styled-components';
import EpisodeBackground from '../assets/EpisodeBackground.png';

export default function EpisodeCards({ number, name }) {
  return (
    <EpisodeWrapper>
      <h3>
        Episode {number}: {name}
      </h3>
    </EpisodeWrapper>
  );
}

EpisodeCards.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
};

const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background-image: url(${EpisodeBackground});
  background-size: cover;
  border-radius: 10px;
  box-shadow: var(--bs);
  color: var(--fc-primary);
  height: 190px;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  width: 330px;
`;
