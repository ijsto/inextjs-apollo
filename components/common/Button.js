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
    div {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  `;
};

const StyledButton = styled.button`
  ${({ inline }) => (inline ? "display: inline;" : "display: block;")};
  ${buttonStyles}
`;

export const ButtonLink = styled.a`
  ${({ block }) => block && "display: block; text-align: center;"};
  ${buttonStyles};
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

export default Button;
