import { redirect, json } from "react-router-dom";
import store from "../store/index";
import { authenticate } from "../store/auth/authSlice";

import { AuthForm } from "../components";

export default function LoginPage() {
  return (
    <>
      <h1>Login Page</h1>
      <AuthForm mode="login" />
    </>
  );
}

export const action = async ({ request }) => {
  const data = await request.formData();
  const userData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  await store.dispatch(authenticate(userData.email, userData.password));

  const error = store.getState().auth.error;

  if (error) {
    return json({ message: error });
  }

  return redirect("/stores");
};
