import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'redux/transactions/operations';
import {
  selectCategories,
  selectPeriodTotal,
  selectSummary,
} from 'redux/transactions/transactionsSlice';
import {
  StyledDoughnut,
  ChartContainer,
  ChartLabel,
} from './CircleChart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

function CircleChart() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const total = useSelector(selectPeriodTotal);
  const summary = useSelector(selectSummary);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const data = {
    labels: categories,
    datasets: [
      {
        label: '',
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
        borderColor: [
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
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <StyledDoughnut data={data} />
      <ChartLabel>${total}</ChartLabel>
    </ChartContainer>
  );
}

export default CircleChart;
