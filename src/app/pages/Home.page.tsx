import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background-color: ${colors.background};
    padding: 40px;
  `}
`;

interface Props {}

const HomePage: React.FC<Props> = () => {
  return <Container>Home page</Container>;
};

export default HomePage;
