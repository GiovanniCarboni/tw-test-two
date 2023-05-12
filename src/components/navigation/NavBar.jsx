import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/stores">Stores</NavLink>
      </div>
      <div>
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </nav>
  );
}
