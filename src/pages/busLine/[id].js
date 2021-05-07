import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession, getSession } from 'next-auth/client';
import { useDarkMode } from 'next-dark-mode';
import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';
import { useQuery } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_BUS_LINE_BY_ID_QUERY } from '../../utils/queries/getBusLineById';
import PageHead from '../../components/PageHead';
import PageContent from '../../components/PageContent';
import { H1 } from '../../styles';

// const fetcher = (url) =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => json.data);

function BusLine() {
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

  const addFavorite = (marker) => {
    const isFavorite = favorites.filter(
      (favorite) => favorite.id === marker.id
    );
    if (isFavorite.lenght === 0) {
      const updateFavorites = favorites.push(marker);
      setFavorite(updateFavorites);
    } else {
      const index = favorites.indexOf(marker);
      if (index > -1) {
        const newFavorites = favorites.splice(index, 1);
        etFavorite(newFavorites);
      }
    }
  };
  // const { data: pet, error } = useSWR(id ? `/api/pets/${id}` : null, fetcher);
  // useEffect(() => {}, [favorites]);
  console.log('favorites', favorites);

  console.log('show on map', showOnMap);
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
        lineColor={data.busLine.color}
        lineName={data.busLine.name}
        addFavorite={addFavorite}
      />
    </div>
  );
}

export default BusLine;

export async function getServerSideProps(context) {
  await dbConnect();
  const id = parseInt(context.query.id);
  const apolloClient = initializeApollo();

  const session = await getSession(context);

  const userEmail = session.user.email;

  await apolloClient.query({
    query: GET_BUS_LINE_BY_ID_QUERY,
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
      // favorites: user.favorites.busStops,
      session,
    },
  };
}
