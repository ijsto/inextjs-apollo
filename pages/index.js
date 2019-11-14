import Jumbo from "../components/dataDisplay/Jumbo";
import Card from "../components/dataDisplay/Card";

export default () => {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Jumbo>
        <h1>iNextJS + Styled-Components /></h1>
      </Jumbo>

      <div>
        <Card
          image="https://ijs.to/images/PLACEHOLDER_COURSE_IMAGE.jpg"
          title="Image"
        >
          This card contains image
        </Card>
      </div>

      <style jsx>{`
        li {
          padding: 1em;
        }
      `}</style>
    </div>
  );
};
