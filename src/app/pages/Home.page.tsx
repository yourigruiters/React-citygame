import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background-color: ${colors.background};
  `}
`;

interface Props {}

const HomePage: React.FC<Props> = () => {
  return <Container>Home page</Container>;
};

export default HomePage;
