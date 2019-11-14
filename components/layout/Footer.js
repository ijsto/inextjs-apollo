import styled from "styled-components";

import Socials from "../Socials";

const StyledFooter = styled.footer`
  background: #776677;
  bottom: 0;
  left: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  width: 100%;

  div {
    color: white;
  }

  a {
    color: white;
  }
  a:hover {
    color: orange;
  }
  .whatisthis {
    margin-top: 3em;
  }
  .madein {
    font-size: 0.75em;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <Socials />

      <div className="whatisthis">20</div>
    </StyledFooter>
  );
};

export default Footer;
