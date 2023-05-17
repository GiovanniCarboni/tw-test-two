import { Form } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";

export default function AddProduct() {
  return (
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
        <button>Save</button>
      </InputBlock>
    </Form>
  );
}
