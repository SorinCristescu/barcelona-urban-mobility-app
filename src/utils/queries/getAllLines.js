import { gql } from '@apollo/client';

export const GET_ALL_LINES_QUERY = gql`
  query allLines {
    metroLines {
      edges {
        node {
          id
          name
          stations {
            edges {
              node {
                id
                name
              }
            }
          }
          color
        }
      }
    }
    busLines {
      edges {
        node {
          id
          name
          stops {
            edges {
              node {
                id
                name
              }
            }
          }
          color
        }
      }
    }
  }
`;
