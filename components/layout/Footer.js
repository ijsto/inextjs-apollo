import { useState } from "react";
import styled from "styled-components";

import Socials from "../Socials";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.accentCol};
  bottom: 0;
  left: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;

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
const StyledFooterButton = styled.div`
  bottom: 0;
  right: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  z-index: 2;
`;

export const Footer = () => {
  const [showFooter, setShow] = useState(false);
  return (
    <>
      {showFooter ? (
        <StyledFooter>
          <Socials />

          <div className="whatisthis">iJS Strapi</div>
          <button onClick={() => setShow(!showFooter)}>Hide Footer</button>
        </StyledFooter>
      ) : (
        <StyledFooterButton>
          <button onClick={() => setShow(!showFooter)}>Show Footer</button>
        </StyledFooterButton>
      )}
    </>
  );
};

export default Footer;
