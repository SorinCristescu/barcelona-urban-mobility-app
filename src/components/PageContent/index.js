import List from '../../components/List';
import BackLink from '../../components/BackLink';
import Map from '../../components/Map';

import { Main } from './style';
import { H5 } from '../../styles';

function PageContent({
  darkModeActive,
  markers,
  pathname,
  originStop,
  endingStop,
  setShowOnMap,
  showOnMap,
  lineColor,
  lineName,
}) {
  return (
    <Main color={`#${lineColor}`}>
      <BackLink />

      <div className="content">
        <div className="details">
          <H5 darkModeActive={darkModeActive}>Bus Line:</H5>
          <h2>{lineName}</h2>
          <H5 darkModeActive={darkModeActive}>Stops:</H5>
          <List
            data={markers}
            pathname={pathname}
            originStop={originStop}
            endingStop={endingStop}
            setShowOnMap={setShowOnMap}
          />
        </div>
        <div className="map">
          <small>Click on marker to see station details</small>
          <Map markers={markers} pathname={pathname} showOnMap={showOnMap} />
        </div>
      </div>
    </Main>
  );
}

export default PageContent;
