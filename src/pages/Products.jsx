import { useSelector } from "react-redux";
import { redirect, useLoaderData } from "react-router-dom";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { StoreManager } from "../components";

export default function ProductsPage() {
  const store = useLoaderData();
  const auth = useSelector((state) => state.auth);

  if (!auth.isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>{store.name}</h1>
      <p>{store.address}</p>
      {auth.type === "admin" && <StoreManager />}
      {store.products &&
        store.products.map((product) => (
          <div key={product.name} style={{ border: "1px solid black" }}>
            <p>{product.name}</p>
            <p>{product.description}</p>
          </div>
        ))}
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
    return redirect("/stores");
  }

  // EDIT STORE
  if (request.method === "PATCH") {
    const data = await request.formData();
    const newDetails = {
      name: data.get("name"),
      address: data.get("address"),
    };

    for (const detail in newDetails) {
      if (newDetails[detail]) continue;
      delete newDetails[detail];
    }

    store.dispatch(
      storesActions.editStore({ name: params.storeName, newDetails })
    );

    return redirect("/stores");
  }

  // ADD PRODUCT
  if (request.method === "POST") {
    const data = await request.formData();
    const newProduct = {
      name: data.get("name"),
      description: data.get("description"),
    };

    store.dispatch(
      storesActions.addProduct({ storeName: params.storeName, newProduct })
    );
    return redirect("/stores/" + params.storeName);
  }
};
