import { useSelector } from "react-redux";
import { StoresManager } from "../components";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import { Link, json, redirect, useActionData } from "react-router-dom";

export default function StoresPage() {
  const auth = useSelector((state) => state.auth);
  const { stores } = useSelector((state) => state.stores);
  const data = useActionData();

  if (!auth.isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>Stores Page</h1>
      {auth.type === "admin" && <StoresManager />}
      {data && data.message && <p>{data.message}</p>}
      {stores.length > 0 &&
        stores.map((store) => (
          <Link key={store.name} to={store.name}>
            <div style={{ border: "1px solid black" }}>
              <img src={store.image} alt={store.name} height="120" />
              <p>{store.name}</p>
              <p>{store.address}</p>
            </div>
          </Link>
        ))}
    </>
  );
}

export const action = async ({ request }) => {
  const stores = JSON.parse(localStorage.getItem("stores"));

  const data = await request.formData();
  const newStore = {
    name: data.get("name"),
    address: data.get("address"),
    image: data.get("image"),
  };

  if (stores.some((store) => store.name === newStore.name)) {
    return json({ message: "Store name already used" });
  }

  store.dispatch(storesActions.addStore({ newStore }));

  return redirect("/stores");
};
