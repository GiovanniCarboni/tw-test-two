import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormResponse from "../../styles/FormResponse";

export default function EditStore({ store, onClose }) {
  const { Form, data } = useFetcher();
  const [controlFields, setControlFields] = useState({
    name: store.name,
    address: store.address,
    image: store.image,
  });

  useEffect(() => {
    if (data && data.message) {
      onClose();
    }
  }, [data, onClose]);

  const changeName = (e) => {
    setControlFields((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const changeAddress = (e) => {
    setControlFields((prevState) => ({
      ...prevState,
      address: e.target.value,
    }));
  };
  const changeImage = (e) => {
    setControlFields((prevState) => ({
      ...prevState,
      image: e.target.value,
    }));
  };

  return (
    <>
      <h3 className="form-title">Edit store</h3>
      <Form method="patch">
        <input name="original-name" value={store.name} readOnly hidden />
        <InputBlock>
          <label htmlFor="name">Store name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={controlFields.name}
            onChange={changeName}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="address">Store Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={controlFields.address}
            onChange={changeAddress}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="image">Product image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={controlFields.image}
            onChange={changeImage}
          />
          {data && data.message && (
            <FormResponse success>{data.message}</FormResponse>
          )}
          {data && data.error && <FormResponse>{data.error}</FormResponse>}
          <button>Save</button>
        </InputBlock>
      </Form>
    </>
  );
}
