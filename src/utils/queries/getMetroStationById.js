import { gql } from '@apollo/client';

export const GET_METRO_STATION_BY_ID_QUERY = gql`
  query Line {
    metroLine: metroLine(findBy: { id: $id }) {
      ... on MetroLine {
        id
        originStation {
          coordinates {
            latitude
            longitude
          }
          lines
        }
        endingStation {
          coordinates {
            latitude
            longitude
          }
          lines
        }
        name
        color
        stations {
          edges {
            node {
              name
              id
              coordinates {
                latitude
                longitude
              }
              lines
            }
          }
        }
      }
    }
  }
`;
