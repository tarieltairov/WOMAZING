import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./routesPaths";
import Layout from "../layouts/Layout";
import Main from "../pages/Main/Main";
import Cart from "../pages/Cart/Cart";
import { Checkout } from "../pages/Checkout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.shop,
        element: <p>shop</p>,
      },
      {
        path: ROUTER_PATHS.brand,
        element: <p>brand</p>,
      },
      {
        path: ROUTER_PATHS.contacts,
        element: <p>contacts</p>,
      },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROUTER_PATHS.checkout,
        element: <Checkout />,
      },
    ],
  },
]);
