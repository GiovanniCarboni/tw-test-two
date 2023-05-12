import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <p>
        If you do not have an account yet, please
        <Link to="/signup">sign up</Link>.
      </p>
    </>
  );
}
