import { useState } from 'react'

import { useCart } from '../../../cartContext'
import { Counter } from 'ui/Counter'

import './Cart'
import './CartItem.scss'

const CartItem = ({ product }) => {
  const { addMoreProduct, items, removeItem } = useCart()
  const [count, setCount] = useState()

  const counterProduct = (value) => {
    setCount(value)
    addMoreProduct(product.id, value)
  }

  return (
    <div className="cart__main_product">
      <div className="image__product">
        <button
          onClick={() => removeItem(product.id)}
          className="botton__product_delete"
        >
          X
        </button>
        <div className="image__product__content">
          <img
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
        </div>
      </div>
      <div className="product__price">
        <span>${product.discountPrice || product.price}</span>
        <Counter
          initialValue={product.quantity}
          onChange={counterProduct}
        />
        <span>${product.price * product.quantity}</span>
      </div>
    </div>
  )
}

export default CartItem
