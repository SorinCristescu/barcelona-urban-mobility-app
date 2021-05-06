import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDarkMode } from 'next-dark-mode';

import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_METRO_LINE_BY_ID_QUERY } from '../../utils/queries/getMetroLineById';

import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';

function MetroLine() {
  const [showOnMap, setShowOnMap] = useState();
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const { pathname } = useRouter();

  const id = parseInt(router.query.id);

  const { loading, data } = useQuery(GET_METRO_LINE_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });

  console.log('on map', showOnMap);
  console.log('metro', data);

  const markers = data.metroLine.stations.edges.map((marker) => {
    return {
      color: `#${data.metroLine.color}`,
      name: marker.node.name,
      coordinates: {
        latitude: marker.node.coordinates.latitude,
        longitude: marker.node.coordinates.longitude,
      },
      lines: marker.node.lines,
      id: marker.node.id,
      type: marker.node.__typename,
    };
  });

  const originStop = data.metroLine.originStation;
  const endingStop = data.metroLine.endingStation;

  if (loading) return <h5>Loading...</h5>;

  return (
    <div>
      <PageHead />
      <PageContent
        darkModeActive={darkModeActive}
        markers={markers}
        pathname={pathname}
        originStop={originStop}
        endingStop={endingStop}
        setShowOnMap={setShowOnMap}
        showOnMap={showOnMap}
        lineColor={data.metroLine.color}
        lineName={data.metroLine.name}
      />
    </div>
  );
}

export default MetroLine;

export async function getServerSideProps({ query }) {
  const id = parseInt(query.id);
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_METRO_LINE_BY_ID_QUERY,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
