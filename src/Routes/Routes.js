import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Shop from "../Pages/Shop/Shop";
import Home from "../Pages/HomePage/Home";
import NotFound from "../Pages/NotFound/NotFound";
import OrderReview from "../Pages/OrderReview/OrderReview";
import { LoaderProductsData } from "../Loaders/LoaderProductsData";

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
        element: <OrderReview />,
      },
    ],
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
