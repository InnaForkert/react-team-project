import CircleChart from 'components/CircleChart/CircleChart';
import StatsTable from 'components/StatsTable/StatsTable';
import { Title, TabletStats } from './Statistics.styled';
import { MediaQuery } from 'components/MediaQuery/MediaQuery';

function Statistics() {
  return (
    <>
      <MediaQuery deviceName={'mobileAll'}>
        <Title>Statistics</Title>
        <CircleChart />
        <StatsTable />
      </MediaQuery>

      <MediaQuery deviceName={'tabletFrom'}>
        <Title>Statistics</Title>
        <CircleChart />
        <TabletStats>
          <StatsTable />
        </TabletStats>
      </MediaQuery>
    </>
  );
}

export default Statistics;
