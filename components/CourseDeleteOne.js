import { useMutation } from "react-apollo";
import FIRST_QUERY from "../api/query/FIRST_QUERY";
import DELETE_MUTATION from "../api/mutation/DELETE_MUTATION";

export const CourseDeleteOne = ({ courseId }) => {
  const [deleteCourse, { loading, error }] = useMutation(DELETE_MUTATION, {
    variables: { courseId },
    refetchQueries: [{ query: FIRST_QUERY }]
  });

  if (error) console.log({ error });

  return (
    <button onClick={deleteCourse}>{loading ? "Deleting" : "Delete"}</button>
  );
};

export default CourseDeleteOne;
