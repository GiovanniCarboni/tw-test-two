import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  padding: 1rem;
  background-color: var(--primary);
  justify-content: space-between;
  font-weight: bold;

  .navigation {
    display: flex;
    gap: 1rem;
  }

  .auth-actions {
    display: flex;
    gap: 1rem;
  }

  a {
    color: var(--background);
    padding: 0.3rem;
    border-radius: 3px;
  }

  .active {
    text-decoration: underline 2px var(--background);
    text-underline-offset: 4px;
  }
`;
export default Nav;
