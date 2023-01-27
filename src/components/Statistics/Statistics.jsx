import CircleChart from 'components/CircleChart/CircleChart';
import { Container } from 'components/Container/Container.styled';
import StatsTable from 'components/StatsTable/StatsTable';

function Statistics() {
  return (
    <Container>
      <CircleChart />
      <StatsTable />
    </Container>
  );
}

export default Statistics;
