import { gql } from '@apollo/client';

export const GET_METRO_LINE_BY_ID_QUERY = gql`
  query MetroLine($id: Int!) {
    metroLine: metroLine(findBy: { id: $id }) {
      ... on MetroLine {
        id
        originStation {
          id
          name
          coordinates {
            latitude
            longitude
          }
          lines
        }
        endingStation {
          id
          name
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
