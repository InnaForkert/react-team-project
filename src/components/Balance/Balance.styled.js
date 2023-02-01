import styled from 'styled-components';

export const Title = styled.div`
  ${({ theme }) => theme.media.desktop}
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;
export const BalanceContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 32px 11px 32px;
  border-radius: 30px;
  color: #a6a6a6;
  text-transform: uppercase;
  margin-bottom: 32px;
  font-size: 12px;

  color: ${({ theme }) => theme.media.tabletFrom} {
    grid-area: bal;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  ${({ theme }) => theme.media.desktop} {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    max-width: 395px;
  }
`;

export const BalanceText = styled.p`
  font-size: 30px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.black};
  line-height: calc(45 / 30);
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 12px;
`;

export const LightText = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
`;
