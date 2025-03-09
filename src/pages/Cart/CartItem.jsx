import React from 'react'

import './Cart'
import './CartItem.scss'

const CartItem = ({ product }) => {
  console.log(product)

  return (
    <div className="cart__main_product">
      <div className="image__product">
        <button className="botton__product_delete">X</button>
        <div className="image__product__content">
          <img
            src={product.image}
            alt={product.name}
          />
          <h3>{product.name}</h3>
        </div>
      </div>
      <div className="product__price">
        <span>${product.price}</span>
        <input
          type="number"
          className="product-qty"
          value={product.quantity}
          min={1}
          readOnly
        />
        <span>${product.price * product.quantity}</span>
      </div>
    </div>
  )
}

export default CartItem
