import { Form, useActionData } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";

export default function AuthForm({ mode }) {
  const data = useActionData();

  return (
    <Form method="post">
      <InputBlock>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </InputBlock>
      <InputBlock>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        {data && data.message && <p>{data.message}</p>}
        <button>{mode}</button>
      </InputBlock>
    </Form>
  );
}
