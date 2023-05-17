import { useState } from "react";
import AdminActions from "../../styles/AdminActions";
import { AddStore } from "../index";

export default function StoresManager() {
  const [managerVisible, setManagerVisible] = useState(false);

  const toggleManager = () => {
    setManagerVisible((prevState) => !prevState);
  };

  return (
    <>
      <AdminActions>
        <button onClick={toggleManager}>
          {!managerVisible ? "Add store" : "Close editor"}
        </button>
      </AdminActions>
      {managerVisible && <AddStore />}
    </>
  );
}
