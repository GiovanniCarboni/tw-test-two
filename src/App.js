import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import dummyUsers from "./data/users";

import HomePage from "./pages/Home";
import LoginPage, { action as loginAction } from "./pages/Login";
import SignupPage, { action as signupAction } from "./pages/Signup";
import StoresPage, {
  loader as loadStores,
  action as addStoreAction,
} from "./pages/Stores";
import ProductsPage, {
  loader as loadProducts,
  action as editStoreAction,
} from "./pages/Products";
import ProductDetailsPage, {
  loader as loadProductDetails,
} from "./pages/ProductDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import GlobalStyle from "./styles/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage />, action: loginAction },
      { path: "/signup", element: <SignupPage />, action: signupAction },
      {
        path: "/stores",
        element: <StoresPage />,
        loader: loadStores,
        action: addStoreAction,
      },
      {
        path: "/stores/:storeName",
        element: <ProductsPage />,
        loader: loadProducts,
        action: editStoreAction,
      },
      {
        path: "/stores/:storeName/:productName",
        element: <ProductDetailsPage />,
        loader: loadProductDetails,
      },
    ],
  },
]);

function App() {
  const auth = useSelector((state) => state.auth);
  const stores = useSelector((state) => state.stores.stores);

  useEffect(() => {
    localStorage.setItem("session", JSON.stringify(auth));
  }, [auth]);

  useEffect(() => {
    localStorage.setItem("stores", JSON.stringify(stores));
  }, [stores]);

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify(dummyUsers));
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
