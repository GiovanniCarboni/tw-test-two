import { useState } from "react";

import AdminActions from "../../styles/AdminActions";
import { EditStore, AddProduct } from "../index";

export default function StoreManager() {
  const [storeEditorVisible, setStoreEditorVisible] = useState(false);
  const [addProductVisible, setAddProductVisible] = useState(false);

  const handleShowManager = () => {
    setStoreEditorVisible((prevState) => !prevState);
    if (addProductVisible) setAddProductVisible(false);
  };
  const handleShowAddProduct = () => {
    setAddProductVisible((prevState) => !prevState);
    if (storeEditorVisible) setStoreEditorVisible(false);
  };

  return (
    <>
      <AdminActions>
        <button onClick={handleShowManager}>
          {storeEditorVisible ? "Close edit store" : "Edit Store"}
        </button>
        <button onClick={handleShowAddProduct}>
          {addProductVisible ? "Close add product" : "Add product"}
        </button>
      </AdminActions>
      {storeEditorVisible && <EditStore />}
      {addProductVisible && <AddProduct />}
    </>
  );
}
