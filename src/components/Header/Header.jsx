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

export const Header = () => {
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
            <Name>Name</Name>
            <Button type="button">
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
