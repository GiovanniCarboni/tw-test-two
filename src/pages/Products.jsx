import { useSelector } from "react-redux";
export default function ProductsPage() {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  if (!isLoggedIn) {
    return <p>You must be logged in to view this page</p>;
  }

  return <h1>Store Page</h1>;
}
