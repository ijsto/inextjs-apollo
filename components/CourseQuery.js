import { useQuery } from "react-apollo";
import FIRST_QUERY from "../api/query/FIRST_QUERY";
import CourseDeleteOne from "./CourseDeleteOne";

export const CourseQuery = () => {
  const { data, loading, error } = useQuery(FIRST_QUERY);
  if (loading) return "Loading..";
  if (error) console.log({ error });
  console.log({ data });

  return (
    <div>
      <h2>Query</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
        {data.courses.map(c => (
          <div key={c.id}>
            <div style={{ display: "grid", alignItems: "baseline" }}>
              <h3>{c.title}</h3>
              <CourseDeleteOne courseId={c.id}></CourseDeleteOne>
            </div>
            <p>{c.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseQuery;
