import Jumbo from "../components/dataDisplay/Jumbo";

export default () => {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Jumbo>
        <h1>iNextJS + Styled-Components /></h1>
      </Jumbo>

      <style jsx>{`
        li {
          padding: 1em;
        }
      `}</style>
    </div>
  );
};
