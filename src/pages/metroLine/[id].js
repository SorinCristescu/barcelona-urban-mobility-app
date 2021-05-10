import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';
import { asc, dsc } from '../../utils';
import { initializeStore } from '../../store';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_METRO_LINE_BY_ID_QUERY } from '../../utils/queries/getMetroLineById';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../store/profile/actions';

// Components
import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';
import { H1 } from '../../styles';
import { elementAlreadyExist, removeElement, fetcher } from '../../utils';
import SignIn from '../../components/SignIn';
import SortAndFilter from '../../components/SortAndFilter';

function MetroLine({ session }) {
  const [showOnMap, setShowOnMap] = useState();
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

  const [sortedMethod, setSortedMethod] = useState('asc');
  const [filtered, setFiltered] = useState(markers);

  const toggleSort = () => {
    if (sortedMethod === 'asc') {
      setSortedMethod('dsc');
      setFiltered(filtered.sort(asc));
    } else {
      setSortedMethod('asc');
      setFiltered(filtered.sort(dsc));
    }
  };

  const handlerSearch = (e) => {
    if (sortedMethod === 'asc') {
      setFiltered(
        markers.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else if (sortedMethod === 'dsc') {
      setFiltered(
        markers.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  if (!session) return <SignIn />;
  // if (loading) return <H1 darkModeActive={darkModeActive}>Loading...</H1>;

  return (
    <>
      <PageHead />
      <SortAndFilter
        handlerSearch={handlerSearch}
        toggleSort={toggleSort}
        sortedMethod={sortedMethod}
        placeholder="Search for metro station"
      />
      <PageContent
        darkModeActive={darkModeActive}
        markers={filtered}
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
  const { dispatch } = reduxStore;

  if (session) {
    dispatch(getProfile(session.user.email));
  }

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
      nitialReduxState: reduxStore.getState(),
      session,
    },
  };
}
