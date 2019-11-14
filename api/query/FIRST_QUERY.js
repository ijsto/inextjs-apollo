import gql from "graphql-tag";

export const FIRST_QUERY = gql`
  query FIRST_QUERY {
    courses {
      id
      title
      summary
    }
  }
`;

export default FIRST_QUERY;
