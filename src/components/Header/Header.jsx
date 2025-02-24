import React, { useState } from "react";
import cart from "../../assets/icons/cart.svg";
import styles from "./Header.module.scss";
import PhoneIcon from "./PhoneIcon";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../routes/routesPaths";
import { AppContainer } from "../../layouts/AppContainer";
import { LogoNav } from "../LogoNav";
import { CallbackModal } from "../CallbackModal";

export function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(3);

  return (
    <AppContainer>
      <header className={styles.header}>
        <LogoNav />

        <div className={styles.contact}>
          <div className={styles.phoneWrapper}>
            <div className={styles.phone} onClick={() => setModalOpen(true)}>
              <PhoneIcon className={styles.phoneIcon} />
            </div>
            <div className={styles.tell}>
              <a href="tel:+74958235412" className={styles.a}>
                +7 (495) 823-54-12
              </a>
            </div>
          </div>
          <div
            className={styles.cartContainer}
            onClick={() => navigate(ROUTER_PATHS.cart)}
          >
            <img src={cart} alt="cart-img" className={styles.cartIcon} />
            {cartCount && <span className={styles.cartBadge}>{cartCount}</span>}
          </div>
        </div>
      </header>
      <CallbackModal
        isModalOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppContainer>
  );
}
