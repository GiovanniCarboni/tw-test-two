import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import InputBlock from "../../styles/InputBlock";
import FormResponse from "../../styles/FormResponse";

export default function EditProduct({ product, onClose }) {
  const { Form, data } = useFetcher();
  const [controlFields, setControlFields] = useState({
    name: product.name,
    description: product.description,
    image: product.image,
  });

  useEffect(() => {
    if (data && data.message) {
      onClose();
    }
  }, [data, onClose]);

  const changeName = (e) => {
    setControlFields((prevState) => ({ ...prevState, name: e.target.value }));
  };
  const changeDescription = (e) => {
    setControlFields((prevState) => ({
      ...prevState,
      description: e.target.value,
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
      <h3 className="form-title">Edit product</h3>
      <Form method="patch">
        <input name="original-name" value={product.name} hidden />
        <InputBlock>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={controlFields.name}
            onChange={changeName}
          />
        </InputBlock>
        <InputBlock>
          <label htmlFor="description">Product description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={controlFields.description}
            onChange={changeDescription}
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
