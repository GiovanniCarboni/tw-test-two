import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormResponse from "../../styles/FormResponse";

export default function AddStore({ onClose }) {
  const { Form, data } = useFetcher();

  useEffect(() => {
    if (data && data.message) {
      onClose();
    }
  }, [data, onClose]);

  return (
    <>
      <h3 className="form-title">Add store</h3>
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
          {data && data.error && <FormResponse>{data.error}</FormResponse>}
          {data && data.message && (
            <FormResponse success>{data.message}</FormResponse>
          )}
          <button>Save</button>
        </InputBlock>
      </Form>
    </>
  );
}
