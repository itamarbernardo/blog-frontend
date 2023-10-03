import { gql } from 'graphql-request';
import { GRAPHQL_FRAGMENTS } from './fragments';

export const GRAPHQL_QUERY = gql`
  ${GRAPHQL_FRAGMENTS}

  query GET_POSTS {
    setting{
      data{
        ...setting
      }
    }
    posts {
      data{
        ...post
      }
    }
  }
`;
