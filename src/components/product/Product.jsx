import { useState } from "react";
import { Link, useFetcher } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../../styles/Card";
import DetailsContainer from "../../styles/DetailsContainer";
import { ReactComponent as EditIco } from "../../assets/icons/edit.svg";
import { ReactComponent as DeleteIco } from "../../assets/icons/delete.svg";
import { EditProduct, Modal } from "../index";

export default function Product({ product }) {
  const [editorVisible, setEditorVisible] = useState(false);
  const { Form } = useFetcher();
  const auth = useSelector((state) => state.auth);

  const openEditor = () => {
    setEditorVisible(true);
  };
  const closeEditor = () => {
    setEditorVisible(false);
  };

  return (
    <>
      <Card className="product-card">
        <div className="image-container">
          <img src={product.image} alt={product.name} height="120" />
        </div>
        <DetailsContainer>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <Link to={product.name}>View details &rarr;</Link>
          {auth.type === "admin" && (
            <>
              <button onClick={openEditor} className="edit-btn">
                <EditIco />
              </button>
              <Form method="delete">
                <input
                  value={product.name}
                  name="product-name"
                  readOnly
                  hidden
                />
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
          <EditProduct onClose={closeEditor} product={product} />
        </Modal>
      )}
    </>
  );
}
