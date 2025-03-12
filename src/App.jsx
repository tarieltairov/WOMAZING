import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { CartProvider } from '../cartContext'

import { routes } from './routes/routes'
import { store } from './store/store'
import './styles/global.scss'

function App() {
  return (
    <Provider store={store}>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </Provider>
  )
}

export default App
