import styled from "styled-components";

const StyledButton = styled.button`
  align-items: center;
  appearance: none;
  background: ${({ warn, theme }) => (warn ? theme.warningCol : "#ffcb41")};
  border: none;
  border-radius: 20rem;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  font-weight: 600;
  font-size: ${({ small }) => (small ? "0.75em" : "1em")};
  height: ${({ small }) => (small ? "3em" : "3.5em")};
  letter-spacing: 1.5px;
  line-height: 1em;
  margin: 0;
  outline: none;
  padding: 0 ${({ small }) => (small ? "1.75em" : "2.5em")};
  text-transform: uppercase;
`;

export const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
