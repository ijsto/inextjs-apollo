import { useQuery } from "react-apollo";
import FIRST_QUERY from "../api/query/FIRST_QUERY";
import CourseDeleteOne from "./CourseDeleteOne";

import styled from "styled-components";

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  min-width: 300px;
  max-width: 1584px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  box-sizing: border-box;
  .entry {
    background: white;
    border-radius: 0.75em;
    box-shadow: rgb(216, 216, 216) 0px 3px 2px -2px;
    margin: 0 1%;
    padding: 0.5em;
    h3 {
      font-size: 18px;
      margin: 2px 0 10px 0;
    }
    p {
      font-size: 15px;
    }
  }
`;

export const CourseQuery = () => {
  const { data, loading, error } = useQuery(FIRST_QUERY);
  if (loading) return "Loading..";
  if (error) console.log({ error });
  console.log({ data });

  return (
    <PostGrid>
      {data.courses.map(c => (
        <div>
          <div className="entry" key={c.id}>
            <h3>{c.title}</h3>

            <p style={{ padding: "1em 0" }}>{c.summary}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "0.5em"
            }}
          >
            <CourseDeleteOne courseId={c.id}></CourseDeleteOne>
          </div>
        </div>
      ))}
    </PostGrid>
  );
};

export default CourseQuery;
