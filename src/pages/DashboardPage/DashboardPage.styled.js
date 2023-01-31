import styled from 'styled-components';

export const Main = styled.main`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  height: calc(100vh - 100%);
  min-height: calc(100vh - 62px);
  ${({ theme }) => theme.media.tabletFrom} {
    min-height: calc(100vh - 80px);
  }
`;
