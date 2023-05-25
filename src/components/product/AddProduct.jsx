import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormResponse from "../../styles/FormResponse";

export default function AddProduct({ onClose }) {
  const { Form, data } = useFetcher();

  useEffect(() => {
    if (data && data.message) {
      onClose();
    }
  }, [data, onClose]);

  return (
    <>
      <h3 className="form-title">Add product</h3>
      <Form method="post">
        <InputBlock>
          <label htmlFor="name">Product name</label>
          <input type="text" id="name" name="name" required />
        </InputBlock>
        <InputBlock>
          <label htmlFor="description">Product description</label>
          <input type="text" id="description" name="description" required />
        </InputBlock>
        <InputBlock>
          <label htmlFor="image">Product image</label>
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
