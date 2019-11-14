import styled from "styled-components";
import Header from "./Header";

const StyledDefaultLayout = styled.div`
  margin: 0 auto;
  max-width: 80%;
`;
export const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <StyledDefaultLayout>{children}</StyledDefaultLayout>
    </>
  );
};

export default DefaultLayout;
