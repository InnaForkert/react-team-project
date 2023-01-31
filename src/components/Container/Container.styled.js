import styled from 'styled-components';

export const Container = styled.div`
  max-width: ${({ theme }) => theme.spacing(120)};
  padding-inline: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;

  ${({ theme }) => theme.media.tablet} {
    max-width: ${({ theme }) => theme.spacing(192)};
    padding-inline: ${({ theme }) => theme.spacing(8)};
    display: grid;                       
    /* grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-template-areas:
      "nav nav nav nav cur cur cur cur cur"
      "bal bal bal bal cur cur cur cur cur"
      "ht ht ht ht ht ht ht ht ht"
      "st st st st st st st st st"; */
    
  }

  ${({ theme }) => theme.media.desktop} {
    max-width: ${({ theme }) => theme.spacing(320)};
    padding-inline: ${({ theme }) => theme.spacing(4)};
    display: grid;
    /* display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(auto, auto);
    grid-template-areas:
      "nav nav nav ht ht ht ht ht ht"
      "bal bal bal ht ht ht ht ht ht"
      "cur cur cur ht ht ht ht ht ht"; */
  }
`

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
