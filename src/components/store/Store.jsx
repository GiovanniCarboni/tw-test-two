import { useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../styles/Card";
import DetailsContainer from "../../styles/DetailsContainer";
import { ReactComponent as EditIco } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIco } from "../../assets/icons/delete.svg";
import { Modal, EditStore } from "../index";

export default function Store({ store }) {
  const [editorVisible, setEditorVisible] = useState(false);
  const { Form } = useFetcher();
  const auth = useSelector((state) => state.auth);

  const openEditor = () => {
    setEditorVisible(true);
  };
  const closeEditor = () => {
    setEditorVisible(false);
  };

  // const handleRemoveStore = () => {
  //   submit(null, { method: "delete", store: store.name });
  // };

  return (
    <>
      <Card className="store-card">
        <div className="image-container">
          <img src={store.image} alt={store.name} />
        </div>
        <DetailsContainer>
          <h3>{store.name}</h3>
          <p>You can find this store at {store.address}</p>
          <Link to={store.name}>Browse products &rarr;</Link>
          {auth.type === "admin" && (
            <>
              <button onClick={openEditor} className="edit-btn">
                <EditIco />
              </button>
              <Form method="delete">
                <input value={store.name} name="store-name" hidden />
                <button className="delete-btn">
                  <DeleteIco />
                </button>
              </Form>
            </>
          )}
        </DetailsContainer>
      </Card>
      {editorVisible && (
        <Modal onClose={closeEditor}>
          <EditStore onClose={closeEditor} store={store} />
        </Modal>
      )}
    </>
  );
}
