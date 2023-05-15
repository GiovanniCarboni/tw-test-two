import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";

export default function ProductManager() {
  const [managerVisible, setManagerVisible] = useState(false);
  const submit = useSubmit();

  const handleShowManager = () => {
    setManagerVisible((prevState) => !prevState);
  };

  const handleRemoveStore = () => {
    submit(null, { method: "delete" });
  };

  return (
    <>
      <button onClick={handleShowManager}>
        {managerVisible ? "Close" : "Edit product"}
      </button>
      {managerVisible && (
        <Form method="patch">
          <label htmlFor="name">Product name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="description">Product description</label>
          <input type="text" id="description" name="description" />
          <button>Save</button>
          <button type="button" onClick={handleRemoveStore}>
            Remove product
          </button>
        </Form>
      )}
    </>
  );
}
