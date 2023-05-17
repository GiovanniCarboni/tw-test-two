import styled from "styled-components";

const InputBlock = styled.div`
  margin: 1rem auto;
  max-width: 30rem;

  label {
    display: block;
    margin-bottom: 0.6rem;
  }
  input {
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
  }

  input:focus {
    outline: 3px solid var(--primary);
  }

  button {
    margin-top: 2rem;
    width: 100%;
  }
`;

export default InputBlock;
