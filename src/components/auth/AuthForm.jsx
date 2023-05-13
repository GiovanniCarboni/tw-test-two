import { Form, useActionData } from "react-router-dom";

export default function AuthForm() {
  const data = useActionData();

  return (
    <Form method="post">
      {data && data.message && <p>{data.message}</p>}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <button>Save</button>
    </Form>
  );
}
