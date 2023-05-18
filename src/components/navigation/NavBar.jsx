import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth/authSlice";
import Nav from "../../styles/Nav";

const activeClass = ({ isActive }) => (isActive ? "active" : "");

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogOut = () => {
    dispatch(authActions.logout());
    navigate("/");
  };

  return (
    <Nav>
      <div className="navigation">
        <div>
          <NavLink className={activeClass} to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className={activeClass} to="/stores">
            Stores
          </NavLink>
        </div>
      </div>
      <div className="auth-actions">
        {!auth.isLoggedIn && (
          <>
            <div>
              <NavLink className={activeClass} to="/login">
                Log in
              </NavLink>
            </div>
            <div>
              <NavLink className={activeClass} to="/signup">
                Sign up
              </NavLink>
            </div>
          </>
        )}
        {auth.isLoggedIn && <button onClick={handleLogOut}>Log out</button>}
      </div>
    </Nav>
  );
}
