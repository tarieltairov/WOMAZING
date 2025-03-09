import React, { useMemo } from 'react'

import { useCart } from '../../../cartContext'
import { Button } from '../../common/ui/Button/Button'
import { BreadCrumbs } from 'ui/BreadCrumbs'

import './Cart.scss'
import CartItem from './CartItem'

const Cart = () => {
  const { items } = useCart()

  const getTotalCost = useMemo(() => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }, [items])

  return (
    <div className="cart-container">
      <div className="cart__header">
        <div className="cart__header_title">
          <h1 className="cart__name_cart">Корзина</h1>
          <BreadCrumbs
            crumbs={[
              { name: 'Главная', path: '/' },
              { name: 'Корзина', path: '/cart' },
            ]}
          />
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
        {items.map((item, idx) => (
          <CartItem
            key={idx}
            product={item}
          />
        ))}
      </div>

      <div className="cart__coupon">
        <div className="cart__coupon_input">
          <input
            className="cart__promocode"
            type="text"
            placeholder="Введите промокод"
          />
          <Button variant={'outlined'}>Применить купон</Button>
        </div>
        <Button
          variant={'outlined'}
          onClick={() => getTotalCost}
        >
          Обновить корзину
        </Button>
      </div>

      <div className="cart__total">
        <div className="cart_total-itoge">
          <div className="cart_total-itoge__subtotal">
            <p className="cart_itoge_p">Подытог:</p>
            <p>$ {getTotalCost}</p>
          </div>
          <div className="cart_total-itoge__delivery">
            <p>Итого:</p>
            <p>$ {getTotalCost}</p>
          </div>
        </div>
        <Button>Оформить заказ</Button>
      </div>
    </div>
  )
}

export default Cart
