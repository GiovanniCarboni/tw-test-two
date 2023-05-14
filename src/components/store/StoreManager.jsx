import { useState } from "react";
import { Form, useSubmit } from "react-router-dom";

export default function StoreManager() {
  const [storeEditorVisible, setStoreEditorVisible] = useState(false);
  const [addProductVisible, setAddProductVisible] = useState(false);
  const submit = useSubmit();

  const handleShowManager = () => {
    setStoreEditorVisible((prevState) => !prevState);
    // if (addProductVisible) setAddProductVisible(false);
  };
  const handleShowAddProduct = () => {
    setAddProductVisible((prevState) => !prevState);
    // if (storeEditorVisible) setStoreEditorVisible(false);
  };

  const handleRemoveStore = () => {
    submit(null, { method: "delete" });
  };

  return (
    <>
      <button onClick={handleShowManager}>
        {storeEditorVisible ? "Close edit store" : "Edit Store"}
      </button>

      {storeEditorVisible && (
        <Form method="patch">
          <label htmlFor="name">Store name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="address">Store Address</label>
          <input type="text" id="address" name="address" />
          <button>Save</button>
          <button type="button" onClick={handleRemoveStore}>
            Remove store
          </button>
        </Form>
      )}
      <button onClick={handleShowAddProduct}>
        {addProductVisible ? "Close add product" : "Add product"}
      </button>
      {addProductVisible && (
        <Form method="post">
          <label htmlFor="name">Product name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="description">Product description</label>
          <input type="text" id="description" name="description" />
          <button>Save</button>
        </Form>
      )}
    </>
  );
}
