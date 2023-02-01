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
  position: relative;
  width: 464px;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    content: '';
    width: 1px;
    height: 100%;
    background-color: #e7e5f2;
  }
`;

export const RightColumn = styled.div`
  width: 784px;
  padding: 45px 0px 0px 69px;
`;
