import styled from 'styled-components';

export const RoundBtn = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(5)};
  right: ${({ theme }) => theme.spacing(5)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.spacing(11)};
  height: ${({ theme }) => theme.spacing(11)};
  background-color: ${({ theme }) => theme.colors.accentGreen};
  border: 1px solid ${({ theme }) => theme.colors.accentGreen};
  border-radius: 50%;
  transition: all ${({ theme }) => theme.animation.cubicBezier} 0s;
  box-shadow: ${({ theme }) => theme.shadows.accentGreen};
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.regular};
  }

  ${({ theme }) => theme.media.mobileFrom} {
    bottom: ${({ theme }) => theme.spacing(10)};
    right: ${({ theme }) => theme.spacing(10)};
  }
`;

export const Icon = styled.svg`
  height: ${({ theme }) => theme.spacing(5)};
  width: ${({ theme }) => theme.spacing(5)};
`;
