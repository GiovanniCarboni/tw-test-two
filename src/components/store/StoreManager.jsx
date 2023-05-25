import { useState } from "react";
import AdminActions from "../../styles/AdminActions";
import { AddProduct, Modal } from "../index";

export default function StoreManager() {
  const [managerVisible, setManagerVisible] = useState(false);

  const openManager = () => {
    setManagerVisible(true);
  };
  const closeManager = () => {
    setManagerVisible(false);
  };

  return (
    <>
      <AdminActions>
        <button onClick={openManager}>Add product</button>
      </AdminActions>
      {managerVisible && (
        <Modal onClose={closeManager}>
          <AddProduct onClose={closeManager} />
        </Modal>
      )}
    </>
  );
}
