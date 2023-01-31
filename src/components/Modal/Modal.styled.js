import styled from 'styled-components';

export const Overlay = styled.div`
  ${({ theme }) => theme.media.mobileAll} {
    position: fixed;
    top: ${({ theme }) => theme.spacing(17)};
    left: 0;
    width: 100vw;
    z-index: 1200;
  }
  ${({ theme }) => theme.media.tabletFrom} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1200;
  }
`;

export const ModalWindow = styled.div`
  max-width: 100vw;
  position: absolute;
  top: 10%;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-right: ${({ theme }) => theme.spacing(5)};
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
  ${({ theme }) => theme.media.mobileFrom} {
    min-width: ${({ theme }) => theme.spacing(100)};
    max-width: ${({ theme }) => theme.spacing(130)};
    min-height: ${({ theme }) => theme.spacing(80)};
    border-radius: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;
