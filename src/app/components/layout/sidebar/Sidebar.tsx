import React from 'react';
import styled from '@emotion/styled';

const Header = styled.header<{
  sidebarOpen: boolean;
}>`
  ${({ theme: { colors }, sidebarOpen }) => `
		width: ${sidebarOpen ? '150px' : '70px'};
    height: auto;
    background-color: ${colors.default};
    border-right: 1px solid ${colors.border};
  `}
`;

interface Props {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ sidebarOpen }) => {
  console.log(sidebarOpen);
  return <Header sidebarOpen={sidebarOpen}>Sidebar</Header>;
};

export default Sidebar;
