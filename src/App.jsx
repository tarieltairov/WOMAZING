import { RouterProvider } from 'react-router-dom'

import { CartProvider } from '../cartContext'

import { routes } from './routes/routes'
import './styles/global.scss'

function App() {
  return (
    <CartProvider>
      <RouterProvider router={routes} />
    </CartProvider>
  )
}

export default App
