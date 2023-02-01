import CircleChart from 'components/CircleChart/CircleChart';
import StatsTable from 'components/StatsTable/StatsTable';
import {
  Title,
  TabletStats,
  LeftColumn,
  StatsTablet,
} from './Statistics.styled';
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
        <StatsTablet>
          <LeftColumn>
            <Title>Statistics</Title>
            <CircleChart />
          </LeftColumn>
          <TabletStats>
            <StatsTable />
          </TabletStats>
        </StatsTablet>
      </MediaQuery>
    </>
  );
}

export default Statistics;
