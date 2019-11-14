import Link from "next/link";

import styled from "styled-components";
import { white } from "../../utils/Colors";

const StyledHeader = styled.header`
  align-items: center;
  background: ${({ theme }) => theme.primaryCol};
  border-color: white;
  display: flex;
  height: 64px;
  justify-content: space-between;
  left: 0;
  padding: 0 2em;
  position: fixed;
  top: 0;
  width: 100%;

  a {
    color: ${white};

    text-transform: uppercase;
    font-weight: 900;
    font-size: 0.75em;
    letter-spacing: 1.5px;
    line-height: 1.5em;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 3.25rem;
    padding-bottom: 2rem;
    text-decoration: none;
    &:hover {
      color: #1c2b6d;
      text-shadow: 1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 10px #fff,
        1px 1px 0 #fff;
      font-weight: 800;
    }
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <a>
            <span>iJS - NextJS + GraphQL</span>
          </a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Query</a>
        </Link>
        <Link href="/mutation">
          <a>Mutation</a>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
