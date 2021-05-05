import { gql } from '@apollo/client';

export const GET_BUS_STATION_BY_ID_QUERY = gql`
  query BusStop {
    busStop: busStop(findBy: { id: $id }) {
      ... on BusStop {
        id
        location {
          address
          street
          coordinates {
            latitude
            longitude
          }
        }
        name
      }
    }
  }
`;
