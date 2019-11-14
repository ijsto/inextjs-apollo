import gql from "graphql-tag";

export const FIRST_MUTATION = gql`
  mutation FIRST_MUTATION($title: String, $summary: String) {
    createCourse(input: { data: { title: $title, summary: $summary } }) {
      course {
        id
        title
        summary
      }
    }
  }
`;

export default FIRST_MUTATION;
