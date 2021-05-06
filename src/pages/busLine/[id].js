import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDarkMode } from 'next-dark-mode';

import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_BUS_LINE_BY_ID_QUERY } from '../../utils/queries/getBusLineById';

import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';

function BusLine() {
  const [showOnMap, setShowOnMap] = useState();
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const { pathname } = useRouter();

  const id = parseInt(router.query.id);

  const { loading, data } = useQuery(GET_BUS_LINE_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });

  const markers = data.busLine.stops.edges.map((marker) => {
    return {
      color: `#${data.busLine.color}`,
      name: marker.node.name,
      coordinates: {
        latitude: marker.node.location.coordinates.latitude,
        longitude: marker.node.location.coordinates.longitude,
      },
      address: marker.node.location.address,
      city: marker.node.location.city,
      street: marker.node.location.street,
      district: marker.node.location.district,
      id: marker.node.id,
      type: marker.node.__typename,
    };
  });
  const originStop = data.busLine.originStop;
  const endingStop = data.busLine.endingStop;

  console.log('show on map', showOnMap);
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
        lineColor={data.busLine.color}
        lineName={data.busLine.name}
      />
    </div>
  );
}

export default BusLine;

export async function getServerSideProps({ query }) {
  const id = parseInt(query.id);
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_BUS_LINE_BY_ID_QUERY,
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
