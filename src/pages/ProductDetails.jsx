import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import StyledProductDetails from "../styles/StyledProductDetails";

export default function ProductDetailsPage() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const product = useLoaderData();

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return (
    <>
      <h1>{product.name}</h1>
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
