import styled from 'styled-components';

const StyledHeaderImage = styled.div`
  align-items: center;
  background: linear-gradient(rgba(217, 226, 231, 0), rgba(217, 226, 231, 1)),
    url(${props => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 300px;
  justify-content: center;
  width: 100%;
  h1 {
    color: #fff;
    font-size: 3em;
  }
`;

export const HeaderImage = ({ children, src }) => {
  return (
    <StyledHeaderImage src={src}>
      <div>{children}</div>
    </StyledHeaderImage>
  );
};

export default HeaderImage;
