import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

export const StyledDoughnut = styled(Doughnut)``;

export const ChartContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;

  width: 100%;
  ${({ theme }) => theme.media.mobileFrom} {
    width: 280px;
  }

  ${({ theme }) => theme.media.tabletFrom} {
    width: 336px;
  }

  ${({ theme }) => theme.media.desktop} {
    width: 288px;
  }
`;

export const ChartLabel = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);

  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: calc(27 / 18);
`;
