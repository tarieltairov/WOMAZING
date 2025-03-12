import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../../assets/icons/logo.svg'
import { ROUTER_PATHS } from '../../../routes/routesPaths'

import styles from './LogoNav.module.scss'

const menuItems = [
  { name: 'Главная', path: ROUTER_PATHS.main },
  { name: 'Магазин', path: ROUTER_PATHS.shop },
  { name: 'О бренде', path: ROUTER_PATHS.brand },
  { name: 'Контакты', path: ROUTER_PATHS.contacts },
]

export const LogoNav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="logo"
        />
        <div className={styles.logoTitle}>Womazing</div>
      </div>

      <nav>
        <button
          className={styles.hamburger}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
        <ul
          className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}
        >
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? styles.o : '')}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
