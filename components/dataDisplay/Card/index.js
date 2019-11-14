import styled from 'styled-components';

const StyledCard = styled.div`
  border: 1px solid white;
  display: block;
  margin: 2em auto;
  .card-body {
    padding: 1em 2em;
    background: white;
  }
  img {
    width: 100%;
  }

  h3 {
    margin: 0 auto 0.5em auto;
    &:hover {
      color: orange;
    }
  }
`;

export const Card = ({ children, content, image, title }) => {
  return (
    <StyledCard>
      {image && <img src={image} />}
      <div className="card-body">
        <div>
          {title && <h3>{title}</h3>}
          {content || children || 'Card Content'}
        </div>
      </div>
    </StyledCard>
  );
};

export default Card;
