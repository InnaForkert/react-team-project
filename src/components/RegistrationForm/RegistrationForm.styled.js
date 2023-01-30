import styled, { css } from 'styled-components';

import { MdEmail, MdLock, MdAccountBox } from 'react-icons/md';

export const AuthWrapper = styled.div`
  margin: auto;
  padding: 32px 20px 36px;


  box-shadow: ${({ theme }) => theme.shadows.regular};

  text-align: center;

  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.mobileAll} {
    width: 100%;
    height: 100%;
  }


  ${({ theme }) => theme.media.tabletFrom} {
    margin-top: 0;
    padding: 40px 0 66px 0;
    min-width: 533px;

    border-radius: 20px;
  }

  ${({ theme }) => theme.media.desktop} {
    margin-top: auto;
    z-index: 1;
  }
`

export const AuthForm = styled.form`
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};

  ${({ theme }) => theme.media.tabletFrom} {
    padding: 0 58.5px 0 65px;
  }
`

export const Title = styled.h2`
  margin-bottom: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  font-family: inherit;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: inherit;
  line-height: inherit;

  ${({ theme }) => theme.media.mobileAll} {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    gap: 15px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0 8px 7px 52px;

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  outline: none;

  &::placeholder{
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus + svg{
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
`;

const basedIconStyles = css`
  width: 24px;
  height: 24px;

  position: absolute;
  left: 8px;
  bottom: 7px;

  color: ${({ theme }) => theme.colors.grey};

  transition: color ${({ theme }) => theme.animation.cubicBezier};
`;

export const EmailIcon = styled(MdEmail)`
  ${basedIconStyles}
`
export const PasswordIcon = styled(MdLock)`
  ${basedIconStyles}
`
export const UserIcon = styled(MdAccountBox)`
  ${basedIconStyles}
`

