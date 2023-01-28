import sprite from '../../assets/icons/sprite.svg';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';
import {
  HeaderMain,
  Container,
  NavItem,
  LogoIcon,
  LogoText,
  Wrapper,
  Name,
  Button,
  ExitIcon,
  ExitText,
} from './Header.styled';

import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'redux/auth/operations';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClickSignOut = () => {
    dispatch(signOut());
  };

  const selectUsername = state => state.auth?.user?.username;
  const username = useSelector(selectUsername);

  console.log(username);

  return (
    <>
      <HeaderMain>
        <Container>
          <NavItem to="home">
            <LogoIcon>
              <use href={sprite + '#icon-wallet'}></use>
            </LogoIcon>
            <LogoText>Wallet</LogoText>
          </NavItem>
          <Wrapper>
            <Name>{username}</Name>
            <Button type="button" onClick={handleClickSignOut}>
              <ExitIcon>
                <use href={sprite + '#icon-exit'}></use>
              </ExitIcon>
              <MediaQuery deviceName={'tabletFrom'}>
                <ExitText>Exit</ExitText>
              </MediaQuery>
            </Button>
          </Wrapper>
        </Container>
      </HeaderMain>
    </>
  );
};
