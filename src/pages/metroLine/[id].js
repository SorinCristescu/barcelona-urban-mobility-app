import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';

import { initializeStore } from '../../store';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_METRO_LINE_BY_ID_QUERY } from '../../utils/queries/getMetroLineById';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProfile,
  addFavorite,
  deletedFavorite,
} from '../../store/profile/actions';

// Components
import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';
import { H1 } from '../../styles';
import { elementAlreadyExist, removeElement, fetcher } from '../../utils';
import SignIn from '../../components/SignIn';

function MetroLine({ session }) {
  const dispatch = useDispatch();

  const [showOnMap, setShowOnMap] = useState();
  const [favorites, setFavorites] = useState([]);
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const { pathname } = useRouter();
  const profile = useSelector((state) => state.profile.profile);

  const id = parseInt(router.query.id);

  console.log('profile from metro', profile);

  const { data } = useQuery(GET_METRO_LINE_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });
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

  if (!session) return <SignIn />;
  // if (loading) return <H1 darkModeActive={darkModeActive}>Loading...</H1>;

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
        lineColor={data.metroLine.color}
        lineName={data.metroLine.name}
      />
    </>
  );
}

export default MetroLine;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const reduxStore = initializeStore();
  const apolloClient = initializeApollo();

  const id = parseInt(context.query.id);

  await apolloClient.query({
    query: GET_METRO_LINE_BY_ID_QUERY,
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
