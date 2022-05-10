import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../media/logo.png';

const TopbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 5px 35px;
  ${({ theme: { colors } }) => `
    background-color: ${colors.default};
    border-bottom: 1px solid ${colors.border};
  `}
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 10px;
  cursor: pointer;
`;

const HamburgerIcon = styled(FontAwesomeIcon)`
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

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 67px;
  padding: 10px;

  img {
    display: block;
    width: 57px;
    height: 57px;
  }
`;

interface Props {
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <TopbarContainer>
      <IconContainer onClick={toggleSidebar}>
        <HamburgerIcon icon="bars" />
      </IconContainer>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
    </TopbarContainer>
  );
};

export default Topbar;
