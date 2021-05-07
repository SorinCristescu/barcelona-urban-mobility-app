import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_METRO_LINE_BY_ID_QUERY } from '../../utils/queries/getMetroLineById';
import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';
import { H1 } from '../../styles';
import { elementAlreadyExist, removeElement, fetcher } from '../../utils';

function MetroLine() {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render without needing to go through a loading stage.
  // This is possible because of the shared context configured in `_app.js` that
  // is used by `useSession()`.
  const [session] = useSession();
  const [showOnMap, setShowOnMap] = useState();
  const [favorites, setFavorites] = useState([]);
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const { pathname } = useRouter();

  const id = parseInt(router.query.id);

  const { loading, data } = useQuery(GET_METRO_LINE_BY_ID_QUERY, {
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

  const addFavorite = async (selectedMarker) => {
    const id = selectedMarker.id;

    if (elementAlreadyExist(id, favorites)) {
      setFavorites(removeElement(favorites, selectedMarker));

      try {
        const newUser = {
          ...user,
          favorites,
        };
        console.log('newUser', newUser);
        await fetch(`/api/users/${user._id}`, {
          method: 'PUT',
          body: newUser,
        });
        // router.push('/');
      } catch (error) {
        // setMessage('Failed to delete the pet.');
      }
    } else if (!elementAlreadyExist(id, favorites)) {
      setFavorites([...favorites, selectedMarker]);

      try {
        const newUser = {
          ...user,
          favorites,
        };
        console.log('newUser', newUser);
        await fetch(`/api/users/${user._id}`, {
          method: 'PUT',
          body: newUser,
        });
        // router.push('/');
      } catch (error) {
        // setMessage('Failed to delete the pet.');
      }
    }
  };

  console.log('favorites', favorites);

  // const { data: user, error } = useSWR(
  //   user ? `/api/users/${user.id}` : null,
  //   fetcher
  // );

  // useEffect(() => {}, [favorites]);

  // if (error) return <H1 darkModeActive={darkModeActive}>Failed to load</H1>;
  if (!session) return <H1 darkModeActive={darkModeActive}>Please sign in!</H1>;
  if (loading) return <H1 darkModeActive={darkModeActive}>Loading...</H1>;

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
        addFavorite={addFavorite}
      />
    </div>
  );
}

export default MetroLine;

export async function getServerSideProps(context) {
  dbConnect();
  const id = parseInt(context.query.id);
  const apolloClient = initializeApollo();

  const session = await getSession(context);

  // const userEmail = session.user.email;

  await apolloClient.query({
    query: GET_METRO_LINE_BY_ID_QUERY,
    variables: {
      id: id,
    },
  });

  // const user = await User.findOne({ email: userEmail }).lean();
  // user._id = user._id.toString();
  // user.createdAt = user.createdAt.toString();
  // user.updatedAt = user.updatedAt.toString();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      // favorites: user.favorites.metroStations,
      session,
      // user,
    },
  };
}
