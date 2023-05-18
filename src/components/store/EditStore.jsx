import { Form, useActionData, useSubmit } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormError from "../../styles/FormResponse";

export default function EditStore() {
  const data = useActionData();
  const submit = useSubmit();

  const handleRemoveStore = () => {
    submit(null, { method: "delete" });
  };

  return (
    <Form method="patch">
      <InputBlock>
        <label htmlFor="name">Store name</label>
        <input type="text" id="name" name="name" />
      </InputBlock>
      <InputBlock>
        <label htmlFor="address">Store Address</label>
        <input type="text" id="address" name="address" />
        {data && data.message && <FormError>{data.message}</FormError>}
        <button>Save</button>
        <button className="danger" type="button" onClick={handleRemoveStore}>
          Remove store
        </button>
      </InputBlock>
    </Form>
  );
}
