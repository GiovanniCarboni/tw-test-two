import { useSelector } from "react-redux";
import { StoresManager, Store } from "../components";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { json, useLoaderData } from "react-router-dom";
import Container from "../styles/Container";

export default function StoresPage() {
  const auth = useSelector((state) => state.auth);
  const stores = useLoaderData();
  // const { stores } = useSelector((state) => state.stores);

  if (!auth.isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>Browse our stores</h1>
      {auth.type === "admin" && <StoresManager />}
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
};
