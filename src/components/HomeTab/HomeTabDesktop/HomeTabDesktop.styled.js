import styled from 'styled-components';

export const HomeTabContainer = styled.div`
&::-webkit-scrollbar {
  height: 100%;
  width: 5px;
  background-color: transparent;
}

&::-webkit-scrollbar-track-piece:corner-present {
  margin-top: 12px;
}

&::-webkit-scrollbar-track-piece:start {
  background: transparent;
  margin-top: 22px;
  overflow: hidden;
}

&::-webkit-scrollbar-track-piece:end {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--placeholder-main-color);
}

&::-webkit-scrollbar-track {
  border-radius: 20px;
  background: transparent;
}



${({ theme }) => theme.media.tablet} {
  {
    margin-bottom: 40px;
  }
}

${({ theme }) => theme.media.tabletFrom} {
  max-height: 60vh;
  overflow: auto;
}

${({ theme }) => theme.media.desktop} {
  {
    width: 100%;
    margin-top: 31px;
  }
}
 `