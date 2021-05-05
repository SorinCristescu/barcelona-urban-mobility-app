import { useState, useEffect } from 'react';
import { useDarkMode } from 'next-dark-mode';
import { lightTheme, darkTheme } from '../../../styles';
import { useQuery, gql } from '@apollo/client';
import { initializeApollo, addApolloState } from '../../../utils/apollo';
// import { LINE_QUERY } from '../../../utils/graphql';
import { useRouter } from 'next/router';
import { device } from '../../../styles';

// Components
import Map from '../../components/Map';
import PageHead from '../../../components/PageHead';
import styled from 'styled-components';

const Main = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .details {
    width: 50%;
    height: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
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

function Station(props) {
  const router = useRouter();
  const { id } = router.query;

  //   const { loading, error, data, fetchMore, networkStatus } = useQuery(
  //     LINE_QUERY,
  //     {
  //       //   variables: {
  //       //     id,
  //       //   },
  //       // Setting this value to true will make the component rerender when
  //       // the "networkStatus" changes, so we are able to know if it is fetching
  //       // more data
  //       notifyOnNetworkStatusChange: true,
  //     }
  //   );

  //   console.log('line', data);
  return (
    <div>
      <PageHead />
      <Main>
        <div className="details">
          <h4>Station name</h4>
          <h5>Lines:</h5>
        </div>
        <div className="map">
          <Map markers={[]} />
        </div>
      </Main>
    </div>
  );
}

export default Station;

export async function getServerSideProps(contex) {
  const apolloClient = initializeApollo();
  console.log(contex);
  //   const LINE_QUERY = gql`
  //     query line {
  //       metroLine: metroLine(findBy: { id: $id }) {
  //         ... on MetroLine {
  //           id
  //           originStation {
  //             coordinates {
  //               latitude
  //               longitude
  //             }
  //             lines
  //           }
  //           endingStation {
  //             coordinates {
  //               latitude
  //               longitude
  //             }
  //             lines
  //           }
  //           name
  //           color
  //           stations {
  //             edges {
  //               node {
  //                 name
  //                 id
  //                 coordinates {
  //                   latitude
  //                   longitude
  //                 }
  //                 lines
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `;

  //   await apolloClient.query({
  //     query: LINE_QUERY,
  //     variables: { id: contex.query.id },
  //   });

  return addApolloState(apolloClient, {
    props: {},
  });
}
