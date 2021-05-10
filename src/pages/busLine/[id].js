import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';

import { initializeStore } from '../../store';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_BUS_LINE_BY_ID_QUERY } from '../../utils/queries/getBusLineById';
import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';
import { H1 } from '../../styles';
import SignIn from '../../components/SignIn';

function BusLine({ session }) {
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

  if (!session) return <SignIn />;
  if (loading) return <H1 darkModeActive={darkModeActive}>Loading...</H1>;

  return (
    <>
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
    </>
  );
}

export default BusLine;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const reduxStore = initializeStore();
  const apolloClient = initializeApollo();

  const id = parseInt(context.query.id);

  await apolloClient.query({
    query: GET_BUS_LINE_BY_ID_QUERY,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      session,
    },
  };
}
