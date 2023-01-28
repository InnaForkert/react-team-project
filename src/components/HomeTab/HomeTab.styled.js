import styled from 'styled-components';

export const HomeTabContainer = styled.div`
&::-webkit-scrollbar {
  height: 100%;
  width: 5px;
  background-color: transparent;
}

${({ theme }) => theme.media.tabletFrom} {
  max-height: 60vh;
  overflow: auto;
}
`