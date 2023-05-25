import { useState } from "react";
import AdminActions from "../../styles/AdminActions";
import { AddStore } from "../index";
import { Modal } from "../";

export default function StoresManager() {
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
        <button onClick={openManager}>Add store</button>
      </AdminActions>
      {managerVisible && (
        <Modal onClose={closeManager}>
          <AddStore onClose={closeManager} />
        </Modal>
      )}
    </>
  );
}
