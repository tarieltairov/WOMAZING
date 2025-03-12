import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../../../cartContext'
import cart from '../../../assets/icons/cart.svg'
import { AppContainer } from '../../../layouts/AppContainer'
import { ROUTER_PATHS } from '../../../routes/routesPaths'
import { CallbackModal } from '../CallbackModal'
import { LogoNav } from '../LogoNav'

import styles from './Header.module.scss'
import PhoneIcon from './PhoneIcon'

export function Header() {
  const { items } = useCart()
  const [isModalOpen, setModalOpen] = useState(false)

  const navigate = useNavigate()

  return (
    <AppContainer>
      <header className={styles.header}>
        <LogoNav />

        <div className={styles.contact}>
          <div className={styles.phoneWrapper}>
            <button
              className={styles.phone}
              onClick={() => setModalOpen(true)}
            >
              <PhoneIcon className={styles.phoneIcon} />
            </button>
            <div className={styles.tell}>
              <a
                href="tel:+74958235412"
                className={styles.a}
              >
                +7 (495) 823-54-12
              </a>
            </div>
          </div>
          <button
            className={styles.cartContainer}
            onClick={() => navigate(ROUTER_PATHS.cart)}
          >
            <img
              src={cart}
              alt="cart-img"
              className={styles.cartIcon}
            />
            {!!items.length && (
              <span className={styles.cartBadge}>{items.length}</span>
            )}
          </button>
        </div>
      </header>
      <CallbackModal
        isModalOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </AppContainer>
  )
}
