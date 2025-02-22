import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Womazing from "../../assets/icons/Womazing.svg";
import styles from "./LogoNav.module.scss";
import { ROUTER_PATHS } from "../../routes/routesPaths";

const menuItems = [
  { name: "Главная", path: ROUTER_PATHS.main },
  { name: "Магазин", path: ROUTER_PATHS.shop },
  { name: "О бренде", path: ROUTER_PATHS.brand },
  { name: "Контакты", path: ROUTER_PATHS.contacts },
];

const LogoNav = () => {
  
  return (
    <div className={styles.logoNavContainer}>
      <Link className={styles.logoContainer} to={ROUTER_PATHS.main}>
        <img src={logo} alt="logo" />
        <img src={Womazing} alt="Womazing" />
      </Link>
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
