import React from 'react';
import styled from '@emotion/styled';
import logo from '../../../media/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = styled.header<{
  sidebarOpen: boolean;
}>`
  ${({ theme: { colors }, sidebarOpen }) => `
		width: ${sidebarOpen ? '250px' : '70px'};
    height: auto;
    max-height: 100vh;
    background-color: ${colors.default};
    border-right: 1px solid ${colors.border};
    transition: width 0.5s linear, background 0.25s linear,
          background-color 0.25s linear, color 0.25s linear,
          border 0.25s linear;
  `}
  overflow: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  padding: 10px;

  img {
    display: block;
    width: 50px;
    height: 50px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 15px;
`;

const UL = styled.ul<{
  sidebarOpen: boolean;
}>`
  ${({ sidebarOpen }) => `
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 10px;
		width: ${sidebarOpen ? '100%' : '100%'};
    height: auto;
    list-style-type: none;
    overflow: hidden;
    transition: 0.5s all;
  `}
`;

// IMG EN TEKST IN AANBRENGEN MET POSITON - ZORGEN DAT DIE ZICHTBAAR IS AL HET BREDER WORDT
const LI = styled.li`
  position: relative;
  top: 0;
  left: 0;
  width: 250px;
  display: flex;
  align-items: center;
  height: auto;
  padding: 10px 0px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  padding: 10px;
  cursor: pointer;

  svg {
    width: 27px;
    height: 27px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  ${({ theme: { colors } }) => `
    color: ${colors.gray};
  `}
  transition: unset;

  &:hover {
    ${({ theme: { colors } }) => `
    color: ${colors.black};
  `}
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
      <Navigation>
        <UL sidebarOpen={sidebarOpen}>
          <LI>
            <IconContainer>
              <Icon icon="credit-card" />
            </IconContainer>
            <p>Test</p>
          </LI>
          <LI>
            <IconContainer>
              <Icon icon="credit-card" />
            </IconContainer>
            <p>Test</p>
          </LI>
          <LI>
            <IconContainer>
              <Icon icon="credit-card" />
            </IconContainer>
            <p>Test</p>
          </LI>
        </UL>
      </Navigation>
    </Header>
  );
};

export default Sidebar;
