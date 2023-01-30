import sprite from '../../assets/icons/sprite.svg';
import { Nav, Icon, List, Text, NavItem } from './Navigation.styled';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';

export default function Navigation() {
  return (
    <Nav>
      <List>
        <li>
          <NavItem to="home">
            <Icon>
              <use href={sprite + '#icon-home'}></use>
            </Icon>
            <MediaQuery deviceName={'tabletFrom'}>
              <Text>Home</Text>
            </MediaQuery>
          </NavItem>
        </li>
        <li>
          <NavItem to="statistics">
            <Icon>
              <use href={sprite + '#icon-statistics'}></use>
            </Icon>
            <MediaQuery deviceName={'tabletFrom'}>
              <Text>Statistics</Text>
            </MediaQuery>
          </NavItem>
        </li>
        <MediaQuery deviceName={'mobileAll'}>
          <li>
            <NavItem to="currency">
              <Icon>
                <use href={sprite + '#icon-balance'}></use>
              </Icon>
            </NavItem>
          </li>
        </MediaQuery>
      </List>
    </Nav>
  );
}
