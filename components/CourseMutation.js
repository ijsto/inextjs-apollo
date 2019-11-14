import { Formik, Form } from "formik";
import { useMutation } from "react-apollo";
import FIRST_MUTATION from "../api/mutation/FIRST_MUTATION";
import FIRST_QUERY from "../api/query/FIRST_QUERY";
import Button from "./common/Button";

export const CourseMutation = () => {
  const [createCourse, { loading }] = useMutation(FIRST_MUTATION, {
    refetchQueries: [{ query: FIRST_QUERY }]
  });

  const handleSubmit = async (values, props) => {
    await createCourse({ variables: { ...values } });

    const { setSubmitting } = props;
    setSubmitting(false);

    return;
  };

  return (
    <div>
      <h2>Saturday Courses</h2>
      <Formik
        initialValues={{
          title: "",
          summary: ""
        }}
        onSubmit={(values, props) => {
          console.log("onSubmit", { values });
          handleSubmit(values, props);
        }}
      >
        {({ handleChange }) => {
          return (
            <Form>
              <div className="input-row">
                <div>
                  <label htmlFor="title">Course title</label>

                  <input
                    className="block"
                    disabled={loading}
                    name="title"
                    onChange={handleChange}
                    type="text"
                    placeholder="Course Title"
                  />
                </div>
              </div>
              <div className="input-row">
                <div>
                  <label htmlFor="summary">Summary</label>

                  <textarea
                    className="block"
                    disabled={loading}
                    name="summary"
                    onChange={handleChange}
                    placeholder="Course Summary"
                  />
                </div>
              </div>

              <div style={{ margin: "0 auto" }}>
                <Button type="submit" disabled={loading}>
                  {loading ? "Creating .." : "Create Course"}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CourseMutation;
