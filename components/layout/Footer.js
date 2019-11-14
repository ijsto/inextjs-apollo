import { useState } from "react";
import styled from "styled-components";

import Socials from "../Socials";
import Button from "../common/Button";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.accentCol};
  bottom: 0;
  left: 0;
  padding: 1.5em;
  position: fixed;
  text-align: center;
  width: 100%;
  z-index: 1;
  div,
  a {
    color: white;
    &:hover {
      color: orange;
    }
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
  button {
    background: ${({ theme }) => theme.accentCol};
    color: white;
  }
`;

export const Footer = () => {
  const [showFooter, setShow] = useState(false);
  return (
    <>
      {showFooter ? (
        <>
          <StyledFooter>
            <Socials />

            <div className="whatisthis">
              <a href="https://ijs.to" target="_blank">
                iJS.to
              </a>
            </div>
          </StyledFooter>
          <StyledFooterButton>
            <Button onClick={() => setShow(!showFooter)}>Hide Footer</Button>
          </StyledFooterButton>
        </>
      ) : (
        <StyledFooterButton>
          <Button onClick={() => setShow(!showFooter)}>Show Footer</Button>
        </StyledFooterButton>
      )}
    </>
  );
};

export default Footer;
