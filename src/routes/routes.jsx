import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Layout from '../layouts/Layout'
import { Auth } from '../pages/Auth'
import { Brand } from '../pages/Brand'
import Cart from '../pages/Cart/Cart'
import { Checkout } from '../pages/Checkout'
import Contacts from '../pages/Contacts/Contacts'
import Main from '../pages/Main/Main'
import { ProductDetail } from '../pages/ProductDetail'
import { Shop } from '../pages/Shop'
import { SuccessPage } from '../pages/SuccessPage'

import { ROUTER_PATHS } from './routesPaths'

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
        path: ROUTER_PATHS.success,
        element: <SuccessPage />,
      },
    ],
  },
  {
    path: ROUTER_PATHS.auth,
    element: <Auth />,
  },
])
