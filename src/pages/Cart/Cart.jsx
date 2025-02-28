import React from 'react';
import './Cart.scss';
import { Button } from '../../components/Button';

const Cart = () => {
  console.log('Cart component is rendering!');
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
      </div>

      <div className="cart__coupon">
        <div className="cart__coupon_input">
          <input className="cart__promocode" type="text" placeholder="Введите промокод" />
          <Button variant={'outlined'}>Применить купон</Button>
        </div>
        <Button variant={'outlined'}>Обновить корзину</Button>
      </div>

      <div className="cart__total">
        <div className="cart_total-itoge">
          <div className="cart_total-itoge__subtotal">
            <p className="cart_itoge_p">Подытог:</p>
            <p>$129</p>
          </div>
          <div className="cart_total-itoge__delivery">
            <p>Итого:</p>
            <p>$129</p>
          </div>
        </div>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  );
};

export default Cart;
