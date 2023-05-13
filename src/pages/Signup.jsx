import { Link, json, redirect } from "react-router-dom";

import store from "../store";
import { register } from "../store/auth/authSlice";
import { AuthForm } from "../components";

export default function SignupPage() {
  return (
    <>
      <h1>Signup Page</h1>
      <AuthForm />
      <p>
        If you alread have an account, <Link to="/login">log in</Link>.
      </p>
    </>
  );
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  store.dispatch(register(userData.email, userData.password));

  const error = store.getState().auth.error;

  if (error) {
    return json({ message: error });
  }

  return redirect("/stores");
};
