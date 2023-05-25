import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  width: 90%;
  background-color: var(--background);
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;

  & > .close-btn {
    text-align: right;
  }
`;

export default StyledModal;
