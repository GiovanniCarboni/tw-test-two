import { useSelector } from "react-redux";
import { redirect, useLoaderData } from "react-router-dom";
import { ProductManager } from "../components";
import store from "../store";
import { storesActions } from "../store/stores/storesSlice";
import AdminActions from "../styles/AdminActions";
import StyledProductDetails from "../styles/StyledProductDetails";

export default function ProductDetailsPage() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const product = useLoaderData();
  const auth = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>{product.name}</h1>
      {auth.type === "admin" && (
        <AdminActions>
          <ProductManager />
        </AdminActions>
      )}
      <StyledProductDetails>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
      </StyledProductDetails>
    </>
  );
}

export const loader = ({ params }) => {
  const store = JSON.parse(localStorage.getItem("stores")).find(
    (store) => store.name === params.storeName
  );

  return store.products.find((product) => product.name === params.productName);
};

export const action = async ({ request, params }) => {
  const storeName = params.storeName;
  const productName = params.productName;

  if (request.method === "DELETE") {
    store.dispatch(storesActions.deleteProduct({ storeName, productName }));
  }

  if (request.method === "PATCH") {
    const data = await request.formData();
    const newDetails = {
      name: data.get("name"),
      description: data.get("description"),
      image: data.get("image"),
    };

    for (const detail in newDetails) {
      if (newDetails[detail]) continue;
      delete newDetails[detail];
    }

    store.dispatch(
      storesActions.editProduct({ storeName, productName, newDetails })
    );
  }

  return redirect("/stores/" + storeName);
};
