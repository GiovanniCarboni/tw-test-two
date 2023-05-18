import { useSelector } from "react-redux";
import { redirect, useLoaderData, json } from "react-router-dom";
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
  // DELETE STORE
  if (request.method === "DELETE") {
    store.dispatch(storesActions.deleteStore({ name: params.storeName }));
  }

  // EDIT STORE
  if (request.method === "PATCH") {
    const stores = JSON.parse(localStorage.getItem("stores"));
    const data = await request.formData();
    const newDetails = {
      name: data.get("name"),
      address: data.get("address"),
    };

    for (const detail in newDetails) {
      if (newDetails[detail]) continue;
      delete newDetails[detail];
    }

    if (
      newDetails.name &&
      stores.some(
        (store) =>
          store.name.toLowerCase().trim() ===
          newDetails.name.toLowerCase().trim()
      )
    ) {
      return json({ message: "Store name already used" });
    }

    store.dispatch(
      storesActions.editStore({ name: params.storeName, newDetails })
    );
  }

  // ADD PRODUCT
  if (request.method === "POST") {
    const products = JSON.parse(localStorage.getItem("stores")).find(
      (store) => store.name === params.storeName
    ).products;

    const data = await request.formData();
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

  return redirect("/stores");
};
