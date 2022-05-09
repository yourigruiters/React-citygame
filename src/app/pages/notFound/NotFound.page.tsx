import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background-color: ${colors.background};
  `}
`;

interface Props {}

const NotFoundPage: React.FC<Props> = () => {
  return <Container>Not Found</Container>;
};

export default NotFoundPage;
