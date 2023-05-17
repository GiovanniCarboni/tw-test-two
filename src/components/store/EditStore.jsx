import React from "react";
import { Form } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";

export default function EditStore({ handleRemoveStore }) {
  return (
    <Form method="patch">
      <InputBlock>
        <label htmlFor="name">Store name</label>
        <input type="text" id="name" name="name" />
      </InputBlock>
      <InputBlock>
        <label htmlFor="address">Store Address</label>
        <input type="text" id="address" name="address" />
        <button>Save</button>
        <button className="danger" type="button" onClick={handleRemoveStore}>
          Remove store
        </button>
      </InputBlock>
    </Form>
  );
}
