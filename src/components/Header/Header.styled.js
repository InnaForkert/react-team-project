import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderMain = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(120)};
  margin: 0 auto;
  display: flex;
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.media.tabletFrom} {
    max-width: ${({ theme }) => theme.spacing(192)};
    padding-right: ${({ theme }) => theme.spacing(8)};
    padding-left: ${({ theme }) => theme.spacing(8)};
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
  }
  ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.spacing(320)};
    padding-right: ${({ theme }) => theme.spacing(4)};
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
`;

export const NavItem = styled(NavLink)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    gap: ${({ theme }) => theme.spacing(5)};
  }
`;

export const LogoIcon = styled.svg`
  width: ${({ theme }) => theme.spacing(7.5)};
  height: ${({ theme }) => theme.spacing(7.5)};
  ${({ theme }) => theme.media.tabletFrom} {
    width: ${({ theme }) => theme.spacing(10)};
    height: ${({ theme }) => theme.spacing(10)};
  }
`;

export const LogoText = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  ${({ theme }) => theme.media.tabletFrom} {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  align-items: center;
  color: ${({ theme }) => theme.colors.grey};
  ${({ theme }) => theme.media.tabletFrom} {
    gap: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Name = styled.p`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.media.tabletFrom} {
    ::after {
      content: '';
      display: block;
      width: 1px;
      height: ${({ theme }) => theme.spacing(7.5)};
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing(0)};
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ExitIcon = styled.svg`
  width: ${({ theme }) => theme.spacing(4.5)};
  height: ${({ theme }) => theme.spacing(4.5)};
`;

export const ExitText = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
