import { useState } from "react";
import { Form, useActionData } from "react-router-dom";

import InputBlock from "../../styles/InputBlock";
import AdminActions from "../../styles/AdminActions";

export default function StoresManager() {
  const data = useActionData();
  const [managerVisible, setManagerVisible] = useState(false);

  const toggleManager = () => {
    setManagerVisible((prevState) => !prevState);
  };

  return (
    <>
      <AdminActions>
        <button onClick={toggleManager}>
          {!managerVisible ? "Add store" : "Close editor"}
        </button>
      </AdminActions>
      {managerVisible && (
        <Form method="post">
          <InputBlock>
            <label htmlFor="name">Store name</label>
            <input type="text" id="name" name="name" required />
          </InputBlock>
          <InputBlock>
            <label htmlFor="address">Store Address</label>
            <input type="text" id="address" name="address" required />
          </InputBlock>
          <InputBlock>
            <label htmlFor="image">Store image</label>
            <input type="url" id="image" name="image" required />
            {data && data.message && <p>{data.message}</p>}
            <button>Save</button>
          </InputBlock>
        </Form>
      )}
    </>
  );
}
