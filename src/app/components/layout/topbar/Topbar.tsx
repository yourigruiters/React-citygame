import React from 'react';
import styled from '@emotion/styled';

const TopbarContainer = styled.div`
  ${({ theme: { colors } }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 25px;
    background-color: ${colors.default};
    border-bottom: 1px solid ${colors.border};
  `}
`;

interface Props {
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ toggleSidebar }) => {
  console.log(toggleSidebar);
  return <TopbarContainer>Hoi</TopbarContainer>;
};

export default Topbar;
