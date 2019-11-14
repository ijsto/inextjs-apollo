import styled, { css } from "styled-components";

const buttonStyles = ({ block, center, size, margin }) => {
  return css`
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    cursor: pointer;
    font-family: Avenir;
    font-weight: 600;
    font-size: ${size === "sm" ? "1em" : "1.25em"};
    margin: ${center ? "0 auto" : margin && margin};
    padding: ${size === "sm" ? "0.125rem 0.3rem" : "0.5rem 1.2rem"};
    width: ${block && "100%"};
    &:focus,
    &:hover {
      opacity: 1;
      outline: none;
      transform: translateY(-1px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
  `;
};

const StyledButton = styled.button`
  ${({ inline }) => (inline ? "display: inline;" : "display: block;")};
  ${buttonStyles}
  div {
    align-items: center;
    display: flex;
    justify-content: center;
  }
  .icon {
    width: ${({ loading }) => (loading ? "32px" : "0")};
  }
`;

export const Button = ({ loading, children, ...props }) => {
  return (
    <StyledButton {...props}>
      <div>
        <span>{loading ? "Loading .." : children}</span>
      </div>
    </StyledButton>
  );
};

export const ButtonLink = styled.a`
  ${({ block }) => block && "display: block; text-align: center;"};
  ${buttonStyles};
`;

export default Button;

// import styled from "styled-components";

// const StyledButton = styled.button`
//   align-items: center;
//   appearance: none;
//   background: ${({ warn, theme }) => (warn ? theme.warningCol : "#ffcb41")};
//   border: none;
//   border-radius: 20rem;
//   box-sizing: border-box;
//   color: #000000;
//   cursor: pointer;
//   font-weight: 600;
//   font-size: ${({ small }) => (small ? "0.75em" : "1em")};
//   height: ${({ small }) => (small ? "3em" : "3.5em")};
//   letter-spacing: 1.5px;
//   line-height: 1em;
//   margin: 0;
//   outline: none;
//   padding: 0 ${({ small }) => (small ? "1.75em" : "2.5em")};
//   text-transform: uppercase;
// `;

// export const Button = props => {
//   return <StyledButton {...props}>{props.children}</StyledButton>;
// };

// export default Button;
