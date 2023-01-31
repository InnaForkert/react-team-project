import styled from 'styled-components';


export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSizes.title};
  margin-bottom: 8px;
  margin-top: 40px;

  ${({ theme }) => theme.media.tabletFrom} {
    margin-top: 0;
    margin-bottom: 20px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
${({ theme }) => theme.media.desktop} {   
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin-top: 32px;
}
`;

export const TabletStats = styled.div`
 grid-column: 2 / 3;
  grid-row: 3 / 7;
  ${({ theme }) => theme.media.desktop} {   
  grid-column: 3 / 4;
  grid-row: 2 / 7;
}
`;
