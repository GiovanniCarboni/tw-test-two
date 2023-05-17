import styled from "styled-components";

const FormResponse = styled.p`
  color: ${({ success }) => (success ? "green" : "red")};
  margin-top: 1rem;
`;

export default FormResponse;
