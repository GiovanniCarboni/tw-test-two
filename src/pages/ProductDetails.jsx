import { useSelector } from "react-redux";
export default function ProductDetailsPage() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return <h1>Product Details Page</h1>;
}
