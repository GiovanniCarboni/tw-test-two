import { useSelector } from "react-redux";
import {
  redirect,
  useLoaderData,
  Link,
  json,
  useActionData,
} from "react-router-dom";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { StoreManager } from "../components";

export default function ProductsPage() {
  const store = useLoaderData();
  const auth = useSelector((state) => state.auth);
  const data = useActionData();

  if (!auth.isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>{store.name}</h1>
      <p>{store.address}</p>
      {data && data.message && <p>{data.message}</p>}
      {auth.type === "admin" && <StoreManager />}
      {store.products &&
        store.products.map((product) => (
          <Link key={product.name} to={product.name}>
            <div style={{ border: "1px solid black" }}>
              <p>{product.name}</p>
              <p>{product.description}</p>
            </div>
          </Link>
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
    const products = JSON.parse(localStorage.getItem("stores")).find(
      (store) => store.name === params.storeName
    ).products;

    const data = await request.formData();
    const newProduct = {
      name: data.get("name"),
      description: data.get("description"),
    };

    if (products.some((product) => product.name === newProduct.name)) {
      return json({ message: "This product already exists" });
    }
    store.dispatch(
      storesActions.addProduct({ storeName: params.storeName, newProduct })
    );
    return redirect("/stores/" + params.storeName);
  }
};
