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

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  width: max-content;
  height: auto;
`;

const Text = styled.p`
  ${({ theme: { colors } }) => `
    color: ${colors.text03};
  `}
  font-size: 16px;
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
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
        <Icon icon="bars" />
      </IconContainer>
      <UserContainer>
        <div>
          <IconContainer>
            <Icon icon="coins" />
          </IconContainer>
          <Text>2,300</Text>
        </div>
        <div>
          <IconContainer>
            <Icon icon="credit-card" />
          </IconContainer>
          <Text>100,000</Text>
        </div>
        <div>
          <IconContainer>
            <Icon icon="location-dot" />
          </IconContainer>
          <Text>Miami, Florida</Text>
        </div>
        <ProfileContainer>
          <img src={logo} alt="logo" />
          <Text>Youri Gruiters</Text>
        </ProfileContainer>
      </UserContainer>
    </TopbarContainer>
  );
};

export default Topbar;
