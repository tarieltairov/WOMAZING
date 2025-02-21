import React, { useState } from "react";
import phonenumber from "../../assets/icons/phone.svg";
import cart from "../../assets/icons/cart.svg";
import styles from "./Header.module.scss";
import LogoNav from "../LogoNav/LogoNav";
import PhoneIcon from "./PhoneIcon";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <div className={styles.wrapper}>
      <LogoNav />

      <div className={styles.contactContainer}>
        <div className={styles.phoneIconContainer}>
          <PhoneIcon className={styles.phoneIcon} />
        </div>

        <img
          src={phonenumber}
          alt="phone-img"
          className={styles.phoneNumberImg}
        />
        <div className={styles.cartContainer}>
          <img src={cart} alt="cart-img" className={styles.cartIcon} />
          {cartCount && (
            <span className={styles.cartBadge}>{cartCount}</span>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Форма заказа обратного звонка</p>
            <button onClick={() => setIsModalOpen(false)}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}
