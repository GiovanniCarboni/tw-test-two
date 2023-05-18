import styled from "styled-components";

const Card = styled.div`
  padding: 2rem 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  .image-container {
    width: 24rem;
    height: 12rem;
    border: 2px solid var(--background);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Card;
