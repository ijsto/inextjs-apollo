import Link from "next/link";

import styled from "styled-components";
import { black, white, primary } from "../../utils/Colors";

const StyledHeader = styled.header`
  align-items: center;
  background: ${primary};
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
    margin: 0 1em;

    &:hover {
      text-shadow: 1px -1px 0 ${white}, 1px -1px 0 #776677, -1px 1px 0 ${white},
        1px 2px 0 #776677;
      font-weight: 800;
      text-decoration: none;
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
