import { gql } from '@apollo/client';

export const ALL_LINES_QUERY = gql`
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

// export const LINE_QUERY = gql`
//   query line {
//     metroLine: metroLine(findBy: { id: $id }) {
//       ... on MetroLine {
//         id
//         originStation {
//           coordinates {
//             latitude
//             longitude
//           }
//           lines
//         }
//         endingStation {
//           coordinates {
//             latitude
//             longitude
//           }
//           lines
//         }
//         name
//         color
//         stations {
//           edges {
//             node {
//               name
//               id
//               coordinates {
//                 latitude
//                 longitude
//               }
//               lines
//             }
//           }
//         }
//       }
//     }
//   }
// `;
