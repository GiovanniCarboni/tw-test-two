import styled from "styled-components";

const Card = styled.div`
  background-color: var(--white);
  padding: 2rem 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  img {
    width: 20rem;
    height: 12rem;
    object-fit: cover;
  }
`;

export default Card;
