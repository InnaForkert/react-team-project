import CircleChart from 'components/CircleChart/CircleChart';
import StatsTable from 'components/StatsTable/StatsTable';
import { Title, TabletStats, LeftPanel } from './Statistics.styled';
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
        <TabletStats>
          <LeftPanel>
            <Title>Statistics</Title>
            <CircleChart />
          </LeftPanel>
          <StatsTable />
        </TabletStats>
      </MediaQuery>
    </>
  );
}

export default Statistics;
