import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Shop from "../Pages/Shop/Shop";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OrderReview from "../Pages/OrderReview/OrderReview";
import { LoaderProductsData } from "../Loaders/LoaderProductsData";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import PriveteRoute from "./PriveteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        loader: LoaderProductsData,
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: LoaderProductsData,
        element: (
          <PriveteRoute>
            <OrderReview />,
          </PriveteRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
