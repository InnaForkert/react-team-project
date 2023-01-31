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
  }
`;

export const TabletStats = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: top;
`;

export const LeftPanel = styled.div``;
