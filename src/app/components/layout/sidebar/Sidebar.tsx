import React from 'react';
import styled from '@emotion/styled';
import logo from '../../../media/logo.png';

const Header = styled.header<{
  sidebarOpen: boolean;
}>`
  ${({ theme: { colors }, sidebarOpen }) => `
		width: ${sidebarOpen ? '250px' : '70px'};
    height: auto;
    background-color: ${colors.default};
    border-right: 1px solid ${colors.border};
    transition: width 0.5s linear, background 0.25s linear,
          background-color 0.25s linear, color 0.25s linear,
          border 0.25s linear;
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 67px;
  padding: 10px;

  img {
    display: block;
    width: 57px;
    height: 57px;
  }
`;

interface Props {
  sidebarOpen: boolean;
}

const Sidebar: React.FC<Props> = ({ sidebarOpen }) => {
  return (
    <Header sidebarOpen={sidebarOpen}>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
    </Header>
  );
};

export default Sidebar;
