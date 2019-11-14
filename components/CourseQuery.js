import { useQuery } from "react-apollo";
import FIRST_QUERY from "../api/query/FIRST_QUERY";

export const CourseQuery = () => {
  const { data, loading, error } = useQuery(FIRST_QUERY);
  if (loading) return "Loading..";
  if (error) console.log({ error });
  console.log({ data });

  return (
    <div>
      <h2>Query</h2>

      {data.courses.map(c => (
        <div key={c.id}>
          <h4>{c.title}</h4>
          <p>{c.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseQuery;
