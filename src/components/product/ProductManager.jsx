import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";

import InputBlock from "../../styles/InputBlock";

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
          <InputBlock>
            <label htmlFor="name">Product name</label>
            <input type="text" id="name" name="name" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="description">Product description</label>
            <input type="text" id="description" name="description" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="image">Product image</label>
            <input type="text" id="image" name="image" />
            <button>Save</button>
            <button
              className="danger"
              type="button"
              onClick={handleRemoveStore}
            >
              Remove product
            </button>
          </InputBlock>
        </Form>
      )}
    </>
  );
}
