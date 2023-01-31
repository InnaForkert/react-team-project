
import CircleChart from 'components/CircleChart/CircleChart';
import StatsTable from 'components/StatsTable/StatsTable';
import { Title } from './Statistics.styled';


function Statistics() {
  return (
    <>
      <Title>Statistics</Title>
      <CircleChart />
      <StatsTable />
    </>
  );
}

export default Statistics;
