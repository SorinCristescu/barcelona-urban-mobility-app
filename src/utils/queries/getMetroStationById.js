import { gql } from '@apollo/client';

export const GET_METRO_STATION_BY_ID_QUERY = gql`
  query MetroStation {
    metroStation: metroStation(findBy: { id: $id }) {
      ... on MetroStation {
        id
        lines
        coordinates {
          latitude
          longitude
        }
        name
      }
    }
  }
`;
