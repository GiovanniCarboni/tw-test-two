import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <>
      <h1>Signup Page</h1>
      <p>
        If you alread have an account, <Link to="/login">log in</Link>.
      </p>
    </>
  );
}
