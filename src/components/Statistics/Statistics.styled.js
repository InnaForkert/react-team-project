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
    margin-top: 40px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const TabletStats = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: top;
`;
