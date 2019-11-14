import gql from "graphql-tag";

export const DELETE_MUTATION = gql`
  mutation DELETE_MUTATION($courseId: ID!) {
    deleteCourse(input: { where: { id: $courseId } }) {
      course {
        id
      }
    }
  }
`;

export default DELETE_MUTATION;
