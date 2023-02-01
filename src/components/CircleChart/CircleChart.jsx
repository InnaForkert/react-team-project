import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import {
  selectPeriodTotal,
  selectSummary,
} from 'redux/transactions/transactionsSlice';
import {
  StyledDoughnut,
  ChartContainer,
  ChartLabel,
} from './CircleChart.styled';
import { formatMoney } from 'utils/formatMoney';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

function CircleChart() {
  const total = useSelector(selectPeriodTotal);
  const summary = useSelector(selectSummary);

  const expenses = summary.filter(el => el.total < 0);

  const formattedTotal = formatMoney(total);

  const data = {
    labels: expenses.map(el => el.name),
    datasets: [
      {
        data: expenses.map(el => el.total.toString().replace('-', '')),
        backgroundColor: [
          '#FED057',
          '#FFD8D0',
          '#FD9498',
          '#C5BAFF',
          '#6E78E8',
          '#4A56E2',
          '#81E1FF',
          '#24CCA7',
          '#00AD84',
          '#784fca',
        ],
        borderWidth: 0,
        cutout: '72%',
      },
    ],
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'bottom',
        },
      },
    },
  };

  return (
    <ChartContainer>
      <StyledDoughnut data={data} />
      <ChartLabel>₴ {formattedTotal}</ChartLabel>
    </ChartContainer>
  );
}

export default CircleChart;
