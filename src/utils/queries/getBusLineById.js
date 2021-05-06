import { gql } from '@apollo/client';

export const GET_BUS_LINE_BY_ID_QUERY = gql`
  query BusLine($id: Int!) {
    busLine: busLine(findBy: { id: $id }) {
      ... on BusLine {
        id
        color
        name
        originStop {
          location {
            address
            street
            city
            district
            coordinates {
              latitude
              longitude
            }
          }
          id
          name
        }
        endingStop {
          location {
            address
            street
            city
            district
            coordinates {
              latitude
              longitude
            }
          }
          id
          name
        }
        stops {
          edges {
            node {
              id
              name
              location {
                address
                street
                city
                district
                coordinates {
                  latitude
                  longitude
                }
              }
            }
          }
        }
      }
    }
  }
`;
