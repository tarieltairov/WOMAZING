import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg';
import styles from './LogoNav.module.scss';
import { ROUTER_PATHS } from '../../routes/routesPaths';

const menuItems = [
  { name: 'Главная', path: ROUTER_PATHS.main },
  { name: 'Магазин', path: ROUTER_PATHS.shop },
  { name: 'О бренде', path: ROUTER_PATHS.brand },
  { name: 'Контакты', path: ROUTER_PATHS.contacts },
];

export const LogoNav = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div className={styles.logoTitle}>Womazing</div>
      </div>

      <nav>
        <ul className={styles.navigation}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} className={({ isActive }) => (isActive ? styles.o : '')}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
