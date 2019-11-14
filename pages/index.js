import Jumbo from "../components/dataDisplay/Jumbo";

export default () => {
  return (
    <div style={{ maxWidth: "90%", margin: "0 auto" }}>
      <Jumbo>
        <h1>iNextJS + Styled-Components /></h1>
      </Jumbo>

      <input placeholder="Type in something nice" type="text" />
    </div>
  );
};
