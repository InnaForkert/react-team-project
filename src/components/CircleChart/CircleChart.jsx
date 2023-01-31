import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'redux/transactions/operations';
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

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.overrides.doughnut.plugins = {
  ...ChartJS.overrides.doughnut.plugins,
  legend: {
    display: false,
  },
};

function CircleChart() {
  const dispatch = useDispatch();
  const total = useSelector(selectPeriodTotal);
  const summary = useSelector(selectSummary);

  const formattedTotal = formatMoney(total);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  console.log(summary);
  const data = {
    labels: summary.map(el => el.name),
    datasets: [
      {
        data: summary.map(el => el.total),
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
