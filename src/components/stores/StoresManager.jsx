import { useState } from "react";
import { Form } from "react-router-dom";

export default function StoresManager() {
  const [managerVisible, setManagerVisible] = useState(false);

  const handleShowManager = () => {
    setManagerVisible((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={handleShowManager}>
        {managerVisible ? "Close" : "Add Store"}
      </button>
      {managerVisible && (
        <Form method="post">
          <label htmlFor="name">Store name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="address">
            Store <address></address>
          </label>
          <input type="text" id="address" name="address" />
          <button>Save</button>
        </Form>
      )}
    </>
  );
}
