import { useSelector } from "react-redux";
import { useLoaderData, json } from "react-router-dom";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { Product, StoreManager } from "../components";
import Container from "../styles/Container";
import Protected from "../styles/Protected";

export default function ProductsPage() {
  const store = useLoaderData();
  const auth = useSelector((state) => state.auth);

  if (!auth.isLoggedIn) {
    return <Protected>You must be logged in to view this page</Protected>;
  }

  return (
    <>
      <h1>{store.name}</h1>

      {auth.type === "admin" && <StoreManager />}
      <Container>
        {store.products &&
          store.products.map((product) => (
            <Product product={product} key={product.name} />
          ))}
      </Container>
    </>
  );
}

export const loader = ({ params }) => {
  const store = JSON.parse(localStorage.getItem("stores")).find(
    (store) => store.name === params.storeName
  );
  return store;
};

export const action = async ({ request, params }) => {
  const products = JSON.parse(localStorage.getItem("stores")).find(
    (store) => store.name === params.storeName
  ).products;
  const data = await request.formData();

  // ADD PRODUCT
  if (request.method === "POST") {
    const newProduct = {
      name: data.get("name"),
      description: data.get("description"),
      image: data.get("image"),
    };

    if (
      products.some(
        (product) =>
          product.name.toLowerCase().trim() ===
          newProduct.name.toLowerCase().trim()
      )
    ) {
      return json({ error: "This product already exists" });
    }

    store.dispatch(
      storesActions.addProduct({ storeName: params.storeName, newProduct })
    );
    return { message: "Success" };
  }

  // EDIT PRODUCT
  if (request.method === "PATCH") {
    const productName = data.get("original-name");
    const newName = data.get("name");
    const newDetails = {
      description: data.get("description"),
      image: data.get("image"),
    };

    if (productName !== newName) newDetails.name = newName;

    for (const detail in newDetails) {
      if (newDetails[detail]) continue;
      delete newDetails[detail];
    }

    if (
      newDetails.name &&
      products.some(
        (product) =>
          product.name.toLowerCase().trim() ===
          newDetails.name.toLowerCase().trim()
      )
    ) {
      return json({ error: "This product already exists" });
    }

    store.dispatch(
      storesActions.editProduct({
        storeName: params.storeName,
        productName,
        newDetails,
      })
    );
    return { message: "success" };
  }

  // DELETE PRODUCT
  if (request.method === "DELETE") {
    const productName = data.get("product-name");
    store.dispatch(
      storesActions.deleteProduct({
        storeName: params.storeName,
        productName,
      })
    );
    return { message: "success" };
  }
};
