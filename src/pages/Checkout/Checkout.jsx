import React from 'react';
import styles from './Checkout.module.scss';
import { AppContainer } from '../../layouts/AppContainer';

export const Checkout = () => {
  return (
    <AppContainer>
      <div className={styles.checkout}>
        <div className={styles.checkoutLeft}>
          <div className={styles.checkoutForm}>
            <h2>Данные получателя</h2>
            <form className={styles.addressForm}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Имя" />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="E-mail" />
              </div>
              <div className={styles.inputGroup}>
                <input type="tel" placeholder="Телефон" />
              </div>
            </form>
          </div>
          <div className={styles.checkoutForm}>
            <h2>Адрес получателя</h2>
            <form className={styles.addressForm}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Страна" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Город" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Улица" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Дом" />
              </div>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Квартира" />
              </div>
            </form>
          </div>
          <div className={styles.checkoutForm}>
            <h2>Комментарии</h2>
            <form className={styles.addressForm}>
              <div className={styles.inputGroup}>
                <textarea type="text" placeholder="Страна" />
              </div>
            </form>
          </div>
        </div>

        {/* ---------------------------------- */}
        <div className={styles.checkoutRight}>
          <div className={styles.order_cart_box}>
            <div className={styles.order_cart}>
              <h3 className={styles.your}>Ваш заказ</h3>
              <p className={styles.product}>
                Товар <span>Всего</span>
              </p>
            </div>
            <div className={styles.items}>
              <div className={styles.order_item}>
                <span className={styles.item_name}>Футболка USA</span>
                <span>$129</span>
              </div>
              <div className={styles.order_item}>
                <span className={styles.item_name}>Подытог</span>
                <span>$129</span>
              </div>
              <div className={styles.order_total}>
                <span className={styles.item_name}>Итого</span>
                <span>$129</span>
              </div>
            </div>
          </div>
          <div className={styles.payment_box}>
            <div className={styles.way}>
              <h3 className={styles.payment}>Способы оплаты</h3>
            </div>
            <div className={styles.checkbox_container}>
              <label>
                <input type="checkbox" />{" "}
                <span className={styles.checkmark}></span>
              Оплата наличными
              </label>
            </div>
            <button className={styles.paypal}>Разместить заказ</button>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
