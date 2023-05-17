import { useState } from "react";
import EditProduct from "./EditProduct";
import AdminActions from "../../styles/AdminActions";

export default function ProductManager() {
  const [managerVisible, setManagerVisible] = useState(false);

  const handleShowManager = () => {
    setManagerVisible((prevState) => !prevState);
  };

  return (
    <>
      <AdminActions>
        <button onClick={handleShowManager}>
          {managerVisible ? "Close" : "Edit product"}
        </button>
      </AdminActions>
      {managerVisible && <EditProduct />}
    </>
  );
}
