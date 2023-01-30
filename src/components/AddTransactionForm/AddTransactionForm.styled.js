import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Wrapper = styled.div`
  text-align: center;
  background-color: #ffffff;
  ${({ theme }) => theme.media.mobileAll} {
    width: 100vw;
    min-height: 100vh;
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
  }
  ${({ theme }) => theme.media.tabletFrom} {
    align-self: center;
    padding-top: ${({ theme }) => theme.spacing(10)};
    padding-bottom: ${({ theme }) => theme.spacing(15)};
    max-width: ${({ theme }) => theme.spacing(135)};
    box-shadow: ${({ theme }) => theme.shadows.regular};
    border-radius: ${({ theme }) => theme.spacing(5)};
  }
`;

export const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
  font-size: ${({ theme }) => theme.spacing(6)};
  line-height: 1.5;
  ${({ theme }) => theme.media.tabletFrom} {
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
`;

export const FormBox = styled(Form)`
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(10)};
  font-size: ${({ theme }) => theme.fontSizes.md};
  ${({ theme }) => theme.media.tabletFrom} {
    padding-left: ${({ theme }) => theme.spacing(13)};
    padding-right: ${({ theme }) => theme.spacing(13)};
  }
`;

export const InputLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  flex: 1 1;
`;

export const Input = styled(Field)`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(5)};

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  width: 100%;
  ${({ theme }) => theme.media.tabletFrom} {
    flex-direction: row;
    flex: 1 1;
    gap: ${({ theme }) => theme.spacing(8)};
  }
`;

export const ToggleLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ToggleBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)}; ;
`;

export const InputComment = styled(Field)`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(5)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;
  min-height: ${({ theme }) => theme.spacing(21)};

  ${({ theme }) => theme.media.tabletFrom} {
    min-height: ${({ theme }) => theme.spacing(4.5)};
  }

  &::placeholder {
    position: fixed;
    top: 0;
    left: ${({ theme }) => theme.spacing(5)};
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const InputAmount = styled(Field)`
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(5)};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;

  ${({ theme }) => theme.media.tabletFrom} {
    padding-left: 0px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
    ${({ theme }) => theme.media.tabletFrom} {
      text-align: center;
    }
  }
`;
