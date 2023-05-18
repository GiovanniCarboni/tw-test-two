import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary: #5e604d;
    --white: #fff;
    --background: #efede7;
    --danger: red;
  }

  body {
    background-color: var(--background);
    font-family: serif;
  }

  h1 {
    padding: 1.4rem;
    text-align: center;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0.4rem 0.8rem;
    background: var(--primary);
    border: none;
    border-radius: 3px;
    color: var(--white);
    font-weight: bold;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    &.danger {
      background-color: var(--danger);
    }
  }
`;
export default GlobalStyle;
