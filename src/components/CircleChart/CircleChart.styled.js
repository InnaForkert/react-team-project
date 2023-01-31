import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

export const StyledDoughnut = styled(Doughnut)`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`;

export const ChartContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  width: 100%;
  ${({ theme }) => theme.media.mobileFrom} {
    width: 280px;
    margin-inline: auto;
  }

  ${({ theme }) => theme.media.tabletFrom} {
    width: 336px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 288px;
  }

  margin-bottom: 32px;
`;

export const ChartLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: calc(27 / 18);
`;
