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

  .edit-btn,
  .delete-btn {
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    padding: 0.4rem;
    border-radius: 5px;
    background: none;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(110%);
      background-color: var(--background);
    }
  }

  .edit-btn {
    right: 3.5rem;
  }
`;

export default Card;
