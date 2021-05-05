import { useState, useEffect } from 'react';
import PageHead from '../../components/PageHead';
import { H5 } from '../../styles';
import styled from 'styled-components';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../../styles';
import { useQuery, gql } from '@apollo/client';
import { initializeApollo, addApolloState } from '../../utils/apollo';
import { GET_BUS_LINE_BY_ID_QUERY } from '../../utils/queries/getBusLineById';
import { GET_METRO_LINE_BY_ID_QUERY } from '../../utils/queries/getMetroLineById';
import Map from '../../components/Map';
import { useRouter } from 'next/router';
import { device } from '../../styles';
import List from '../../components/List';

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

function Line() {
  const { darkModeActive } = useDarkMode();
  const router = useRouter();
  const id = parseInt(router.query.id);
  console.log('id', typeof id);
  const { loading, data } = useQuery(GET_METRO_LINE_BY_ID_QUERY, {
    variables: {
      id: id,
    },
  });

  console.log('line', data);

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

  if (loading) return <h5>Loading...</h5>;

  return (
    <div>
      <PageHead />
      <Main color={`#${data.metroLine.color}`}>
        <div className="details">
          <H5 darkModeActive={darkModeActive}>Metro Line:</H5>
          <h2>{data.metroLine.name}</h2>
          <H5 darkModeActive={darkModeActive}>Stations:</H5>
          <List data={markers} />
        </div>
        <div className="map">
          <Map markers={markers} id={id} />
        </div>
      </Main>
    </div>
  );
}

export default Line;

export async function getServerSideProps({ query }) {
  const id = parseInt(query.id);
  const apolloClient = initializeApollo();
  console.log('id', typeof id);
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
