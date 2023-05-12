import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import StoresPage from "./pages/Stores";
import ProductsPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/stores", element: <StoresPage /> },
      { path: "/stores/:storeName", element: <ProductsPage /> },
      {
        path: "/stores/:storeName/:productId",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
