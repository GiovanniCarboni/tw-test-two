import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background-color: var(--background);
  padding: 1rem 2rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  & > .close-btn {
    text-align: right;
  }
`;

export default StyledModal;
