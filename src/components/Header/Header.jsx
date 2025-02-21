import React, { useState } from "react";
import phonenumber from "../../assets/icons/phone.svg";
import cart from "../../assets/icons/cart.svg";
import styles from "./Header.module.scss";
import PhoneIcon from "./PhoneIcon";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../routes/routesPaths";
import { AppContainer } from "../../layouts/AppContainer";
import { LogoNav } from "../LogoNav";

export function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(3);

  return (
    <AppContainer className={styles.header}>
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
          <div
            className={styles.cartContainer}
            onClick={() => navigate(ROUTER_PATHS.cart)}
          >
            <img src={cart} alt="cart-img" className={styles.cartIcon} />
            {cartCount && <span className={styles.cartBadge}>{cartCount}</span>}
          </div>
        </div>
      </div>
    </AppContainer>
  );
}
