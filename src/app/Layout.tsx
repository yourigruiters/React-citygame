import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/layout/sidebar/Sidebar';
import Topbar from './components/layout/topbar/Topbar';
import styled from '@emotion/styled';

const LayoutContainer = styled.div`
  ${({ theme: { colors } }) => `
		display: flex;
		width: 100%;
		height: auto;
		min-height: 100vh;
    background-color: ${colors.background};
  `}
`;

const Main = styled.main`
  ${({ theme: { colors } }) => `
		width: 100%;
    background-color: ${colors.background};
  `}
`;

interface Props {}

const Layout: React.FC<Props> = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <LayoutContainer>
      <Sidebar sidebarOpen={sidebarOpen} />
      <Main>
        <Topbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </Main>
      {/* <button onClick={handleClick}>Hoi</button> */}
    </LayoutContainer>
  );
};

export default Layout;
