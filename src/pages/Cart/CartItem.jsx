import React from "react";
import "./CartItem.scss";
import "./Cart"

const CartItem = ({ product, onDelete }) => {
  return (
    <div className="cart__main_product">
      <div className="image__product">
        <button className="botton__product_delete" onClick={() => onDelete(product.id)}>X</button>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
      </div>
      <div className="product__price">
        <span>${product.price}</span>
        <input type="number" className="product-qty" value={product.quantity} min={1} readOnly />
        <span>${product.price * product.quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;