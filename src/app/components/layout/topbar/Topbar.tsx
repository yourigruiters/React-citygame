import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../media/logo.png';
import Tooltip from '../../Tooltip';

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

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
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
  width: max-content;
  height: auto;
`;

const UserData = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  height: auto;
  cursor: pointer;

  &:hover svg {
    ${({ theme: { colors } }) => `
    color: ${colors.black};
  `}
  }
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
  column-gap: 10px;
  width: max-content;
  height: 60px;
  padding: 10px;
  cursor: pointer;

  img {
    display: block;
    width: 40px;
    height: 40px;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5px;
  ${({ theme: { colors } }) => `
    background-color: ${colors.default};
    border-bottom: 1px solid ${colors.border};
  `}
  background-color: #3498db;
`;

interface Props {
  toggleSidebar: () => void;
}

const Topbar: React.FC<Props> = ({ toggleSidebar }) => {
  return (
    <TopContainer>
      <TopbarContainer>
        <IconContainer onClick={toggleSidebar}>
          <Icon icon="bars" />
        </IconContainer>
        <UserContainer>
          <Tooltip value="Coins in hand">
            <UserData>
              <IconContainer>
                <Icon icon="coins" />
              </IconContainer>
              <Text>2,300</Text>
            </UserData>
          </Tooltip>
          <Tooltip value="Bank account">
            <UserData>
              <IconContainer>
                <Icon icon="credit-card" />
              </IconContainer>
              <Text>100,000</Text>
            </UserData>
          </Tooltip>
          <Tooltip value="Current location">
            <UserData>
              <IconContainer>
                <Icon icon="location-dot" />
              </IconContainer>
              <Text>Miami, Florida</Text>
            </UserData>
          </Tooltip>
          <ProfileContainer>
            <img src={logo} alt="logo" />
            <Text>Youri Gruiters</Text>
          </ProfileContainer>
        </UserContainer>
      </TopbarContainer>
      <ExperienceContainer></ExperienceContainer>
    </TopContainer>
  );
};

export default Topbar;
