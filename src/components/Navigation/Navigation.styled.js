import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)};
  margin-left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.media.tabletFrom} {
    padding-top: ${({ theme }) => theme.spacing(10)};
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    margin-left: 0;
    transform: none;
  }
`;

export const Nav = styled.ul`
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.media.tabletFrom} {
    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(8)};

  ${({ theme }) => theme.media.tabletFrom} {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const NavItem = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;

  &.active {
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    svg {
      fill: ${({ theme }) => theme.colors.accentBlue};
      background-color: ${({ theme }) => theme.colors.white};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
    }
  }
`;

export const Icon = styled.svg`
  border-radius: 7px;
  fill: ${({ theme }) => theme.colors.accentViolet};
  background-color: var(--color1);
  display: inline-block;
  width: ${({ theme }) => theme.spacing(9.5)};
  height: ${({ theme }) => theme.spacing(9.5)};
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;

  ${({ theme }) => theme.media.tabletFrom} {
    border-radius: 3px;
    width: ${({ theme }) => theme.spacing(4.5)};
    height: ${({ theme }) => theme.spacing(4.5)};
  }
`;

export const Text = styled.p`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.5;
`;
