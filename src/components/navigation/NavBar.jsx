import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth/authSlice";

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <nav style={{ display: "flex", gap: "1rem" }}>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/stores">Stores</NavLink>
      </div>
      {!auth.isLoggedIn && (
        <>
          <div>
            <NavLink to="/login">Log in</NavLink>
          </div>
          <div>
            <NavLink to="/signup">Sign up</NavLink>
          </div>
        </>
      )}
      {auth.isLoggedIn && <button onClick={handleLogOut}>Log out</button>}
    </nav>
  );
}
