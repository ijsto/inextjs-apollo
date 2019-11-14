import Jumbo from "../components/dataDisplay/Jumbo";
import CourseQuery from "../components/CourseQuery";
import CourseMutation from "../components/CourseMutation";

export default () => {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Jumbo>
        <h1>iJS Strapi + Apollo</h1>
      </Jumbo>

      <CourseMutation></CourseMutation>
      <CourseQuery></CourseQuery>
      <style jsx>{`
        li {
          padding: 1em;
        }
      `}</style>
    </div>
  );
};
