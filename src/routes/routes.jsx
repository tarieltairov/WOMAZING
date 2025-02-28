import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTER_PATHS } from './routesPaths';
import Layout from '../layouts/Layout';
import Main from '../pages/Main/Main';
import Cart from '../pages/Cart/Cart';
import { Checkout } from '../pages/Checkout';
import { Shop } from '../pages/Shop';
import { SuccessPage } from '../pages/SuccessPage';
import Contacts from '../pages/Contacts/Contacts';
import { Brand } from '../pages/Brand';
import { ProductDetail } from '../pages/ProductDetail';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.shop,
        element: <Shop />,
      },
      {
        path: ROUTER_PATHS.brand,
        element: <Brand />,
      },
      {
        path: ROUTER_PATHS.contacts,
        element: <Contacts />,
      },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROUTER_PATHS.product,
        element: <ProductDetail />,
      },
      {
        path: ROUTER_PATHS.checkout,
        element: <Checkout />,
      },
      {
        path: ROUTER_PATHS.SuccessPage,
        element: <SuccessPage />,
      },
    ],
  },
]);
