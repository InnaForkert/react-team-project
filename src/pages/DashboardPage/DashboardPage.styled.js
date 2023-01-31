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

export const LeftColumn = styled.div`
  width: 480px;
  /* padding: 0 69px 0 0; */
`;

export const RightColumn = styled.div`
  width: 800px;
  padding: 45px 0 69px 0;
`;
