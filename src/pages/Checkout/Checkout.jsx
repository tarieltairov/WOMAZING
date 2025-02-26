import React from "react";
import styles from "./Checkout.module.scss";
import { AppContainer } from "../../layouts/AppContainer";

export const Checkout = () => {
  return (
    <AppContainer>
      <div className={styles.checkout}>
        <div className={styles.checkoutLeft}>
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
      </div>
    </AppContainer>
  );
};
