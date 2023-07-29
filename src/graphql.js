// graphql.js
import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  {
    propertyCollection(limit: 6) {
      items {
        id
        title
        address
        category
        image {
          url
        }
      }
    }
  }
`;
