import { RouterProvider, createBrowserRouter } from "react-router-dom";

import dummyUsers from "./data/users";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import StoresPage from "./pages/Stores";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import { action as loginAction } from "./pages/Login";
import { action as signupAction } from "./pages/Signup";
import { action as addStoreAction } from "./pages/Stores";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage />, action: loginAction },
      { path: "/signup", element: <SignupPage />, action: signupAction },
      { path: "/stores", element: <StoresPage />, action: addStoreAction },
      { path: "/stores/:storeName", element: <ProductsPage /> },
      {
        path: "/stores/:storeName/:productId",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("users"))) {
      localStorage.setItem("users", JSON.stringify(dummyUsers));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
