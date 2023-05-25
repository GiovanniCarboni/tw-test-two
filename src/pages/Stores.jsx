import { useSelector } from "react-redux";
import { json, redirect, useLoaderData } from "react-router-dom";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { StoresManager, Store } from "../components";
import Container from "../styles/Container";
import Protected from "../styles/Protected";

export default function StoresPage() {
  const auth = useSelector((state) => state.auth);
  const stores = useLoaderData();

  if (!auth.isLoggedIn) {
    return <Protected>You must be logged in to view this page</Protected>;
  }

  return (
    <>
      <h1>Browse our stores</h1>
      {auth.type === "admin" && <StoresManager stores={stores} />}
      <Container>
        {stores.length > 0 &&
          stores.map((store) => <Store store={store} key={store.name} />)}
      </Container>
    </>
  );
}

export const loader = () => {
  const stores = JSON.parse(localStorage.getItem("stores"));
  return stores;
};

export const action = async ({ request }) => {
  const stores = JSON.parse(localStorage.getItem("stores"));

  // ADD STORE
  if (request.method === "POST") {
    const data = await request.formData();
    const newStore = {
      name: data.get("name"),
      address: data.get("address"),
      image: data.get("image"),
    };

    if (
      stores.some(
        (store) =>
          store.name.toLowerCase().trim() === newStore.name.toLowerCase().trim()
      )
    ) {
      return json({ error: "Store name already used" });
    }

    store.dispatch(storesActions.addStore({ newStore }));

    return { message: "Success" };
  }

  // EDIT STORE
  if (request.method === "PATCH") {
    const data = await request.formData();
    const storeName = data.get("original-name");
    const newName = data.get("name");
    const newDetails = {
      address: data.get("address"),
    };

    if (storeName !== newName) newDetails.name = newName;

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
      return json({ error: "Store name already used" });
    }

    store.dispatch(storesActions.editStore({ name: storeName, newDetails }));
    // return redirect("/stores");
    return { message: "success" };
  }

  // DELETE STORE
  if (request.method === "DELETE") {
    const data = await request.formData();
    const storeName = data.get("store-name");
    store.dispatch(storesActions.deleteStore({ name: storeName }));
    return { message: "success" };
  }
};
