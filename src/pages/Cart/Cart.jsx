import React from "react";
import "./Cart.scss";
import productImage from "../../assets/images/product.png";

const Cart = () => {
  console.log("Cart component is rendering!");
  return (
    <div className="cart-container">
      <div className="cart__header">
        <div className="cart__header_title">
          <h1 className="cart__name_cart">Корзина</h1>
          <nav className="cart__nav">
            <a href="/">Главная</a>
            <span className="nouneym">-</span>
            <a href="/cart">Корзина</a>
          </nav>
        </div>
      </div>
      <div className="cart__main">
        <div className="cart__main_result">
          <span>Товар</span>
          <div className="cart_res">
            <span>Цена</span>
            <span>Количество</span>
            <span className="cart_result">Всего</span>
          </div>
        </div>

        <hr />

        <div className="cart__main_product">
          <div className="image__product">
            <button className="botton__product_delete">X</button>
            <img src={productImage} alt="img-result" />
            <h3>Футболка USA</h3>
          </div>
          <div className="product__price">
            <span>$129</span>
            <input type="number" className="product-qty" value={1} min={1} />
            <span>$129</span>
          </div>
        </div>
      </div>

      <div className="cart__coupon">
        <div className="cart__coupon_input">
          <input type="text" placeholder="Введите промокод" />
          <button className="button__coupon">Применить купон</button>
        </div>
        <button className="update__cart">Обновить корзину</button>
      </div>

      <div className="cart__total">
        <div className="cart_total-itoge">
          <div>
            <p>Подытог:</p>
            <p>$129</p>
          </div>
          <div>
            <p>Итого:</p>
            <p>$129</p>
          </div>
        </div>
        <button className="checkout__button">Оформить заказ</button>
      </div>
    </div>
  );
};

export default Cart;
