import { useRouter } from 'next/router';
import { useDarkMode } from 'next-dark-mode';

import { useQuery, gql } from '@apollo/client';
import { initializeApollo } from '../../utils/apollo';
import { GET_BUS_STATION_BY_ID_QUERY } from '../../utils/queries/getBusStationById';
import { GET_METRO_STATION_BY_ID_QUERY } from '../../utils/queries/getMetroStationById';

import Map from '../../components/Map';
import PageHead from '../../components/PageHead';
import { device, H5 } from '../../styles';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  .details {
    padding: 20px;
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    h2 {
      padding: 0;
      margin: 10px 0 20px 0;
      color: ${(props) => props.color};
    }
    @media ${device.mobileS} {
      display: none;
    }
    @media ${device.mobileM} {
      display: none;
    }
    @media ${device.mobileL} {
      display: none;
    }
    @media ${device.laptop} {
      display: flex;
    }
    @media ${device.laptopL} {
      display: flex;
    }
    @media ${device.desktop} {
      display: flex;
    }
  }

  .map {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.mobileS} {
      width: 100%;
    }
    @media ${device.mobileM} {
      width: 100%;
    }
    @media ${device.mobileL} {
      width: 100%;
    }
    @media ${device.tablet} {
      width: 100%;
    }
    @media ${device.laptop} {
      width: 50%;
    }
    @media ${device.laptopL} {
      width: 50%;
    }
    @media ${device.desktop} {
      width: 50%;
    }
  }
`;

function Station() {
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log('pathname', router.pathname);
  const { loading, data } = useQuery(GET_METRO_STATION_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });

  console.log('station', data);

  // const markers = data.metroLine.stations.edges.map((marker) => {
  //   return {
  //     color: `#${data.metroLine.color}`,
  //     name: marker.node.name,
  //     coordinates: {
  //       latitude: marker.node.coordinates.latitude,
  //       longitude: marker.node.coordinates.longitude,
  //     },
  //     lines: marker.node.lines,
  //     id: marker.node.id,
  //     type: marker.node.__typename,
  //   };
  // });

  if (loading) return <h5>Loading...</h5>;

  return (
    <div>
      <PageHead />
      <Main
      // color={`#${data.metroLine.color}`}
      >
        <div className="details">
          <H5 darkModeActive={darkModeActive}>Metro Station:</H5>
          <h2>{data.metroLine.name}</h2>
          <H5 darkModeActive={darkModeActive}>Lines connection:</H5>
          {/* <List data={markers} /> */}
        </div>
        <div className="map">
          <Map markers={markers} />
        </div>
      </Main>
    </div>
  );
}

export default Station;

export async function getServerSideProps({ query }) {
  const id = parseInt(query.id);
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_METRO_STATION_BY_ID_QUERY,
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
