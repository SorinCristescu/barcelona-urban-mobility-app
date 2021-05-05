import { gql } from '@apollo/client';

export const GET_BUS_LINE_BY_ID_QUERY = gql`
  query BusLine {
    busLine: busLine(findBy: { id: $id }) {
      ... on BusLine {
        id
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
        color

        name
      }
    }
  }
`;
