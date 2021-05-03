import styled from 'styled-components';
import Portal from '../assets/Portal.png';

export default function Home() {
  return (
    <ImageWrapper>
      <Logo src={Portal} alt="This is the Portal" />
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  height: 300px;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 50px;
  width: 300px;
`;

const Logo = styled.img`
  height: 300px;
  width: 300px;
`;
