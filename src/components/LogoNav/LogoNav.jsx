import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Womazing from "../../assets/icons/Womazing.svg";
import styles from "./LogoNav.module.scss";

const menuItems = [
  { name: "Главная", path: "/" },
  { name: "Магазин", path: "/shop" },
  { name: "О бренде", path: "/brand" },
  { name: "Контакты", path: "/contacts" },
];

const LogoNav = () => {
  return (
    <div className={styles.logoNavContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        <img src={Womazing} alt="Womazing" />
      </div>
      <nav>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LogoNav;
