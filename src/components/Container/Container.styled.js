import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(120)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.spacing(192)};
    padding-inline: ${({ theme }) => theme.spacing(8)};
  }

  ${({ theme }) => theme.media.desktop} {
    display: grid;

    max-width: ${({ theme }) => theme.spacing(320)};
    padding-inline: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ContainerAuth = styled(Container)`
  display: flex;

  ${({ theme }) => theme.media.mobileAll} {
    padding-inline: 0;
    height: 100vh;
    max-width: 100vw;
  }

  ${({ theme }) => theme.media.tablet} {
    flex-direction: column;
  }

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

export const Grid = styled.div`
  ${({ theme }) => theme.media.tabletFrom} {
    display: grid;
  }

  ${({ theme }) => theme.media.desktop} {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
`;
