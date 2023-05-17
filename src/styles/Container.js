import styled from "styled-components";

const Container = styled.div`
  .store-card:nth-child(odd) {
    background-color: #b3a488;
  }
  .store-card:nth-child(even) {
    background-color: #a47f57;
  }
  .product-card {
    background-color: #a47f57;
    border-bottom: 3px solid var(--background);
  }
`;

export default Container;
