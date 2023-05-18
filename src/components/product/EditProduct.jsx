import { Form, useActionData, useSubmit } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormResponse from "../../styles/FormResponse";

export default function EditProduct() {
  const data = useActionData();
  const submit = useSubmit();

  const handleRemoveProduct = () => {
    submit(null, { method: "delete" });
  };

  return (
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
        {data && data.message && <FormResponse>{data.message}</FormResponse>}
        <button>Save</button>
        <button className="danger" type="button" onClick={handleRemoveProduct}>
          Remove product
        </button>
      </InputBlock>
    </Form>
  );
}
