import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 100%;
  color: var(--background);

  h3 {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  a {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    color: inherit;
    text-decoration: underline;
  }
`;

export default DetailsContainer;
