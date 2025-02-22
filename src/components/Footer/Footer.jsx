import styles from "./Footer.module.scss";
import Image1 from "../../assets/icons/instagram (1) 1.svg";
import Image2 from "../../assets/icons/Vector.svg";
import Image3 from "../../assets/icons/Group.svg";
import Image4 from "../../assets/icons/visa-mastercard 1.svg";
import LogoNav from "../LogoNav/LogoNav";

export function Footer() {
  return (
    <footer className={styles.FooterContainer}>
      <div className={styles.container}>
        <LogoNav />

        <div className={styles.containerEmail}>
          <div className={styles.tell}>
            <p>+7 (495) 823-54-12</p>
            <a href="#" className={styles.a}>
              hello@womazing.com
            </a>
          </div>
        </div>
      </div>

      <div className={styles.containerInfo}>
        <div className={styles.politic}>
          <div>
            <p>© Все права защищены</p>
            <p>Политика конфиденциальности</p>
            <p>Публичная оферта</p>
          </div>

          <ul className={styles.ul}>
            <li>Пальто</li>
            <li>Свитшоты</li>
            <li>Кардиганы</li>
            <li>Толстовки</li>
          </ul>
        </div>

        <div>
          <div className={styles.icons}>
            <img src={Image1} alt="instagram-icom" />
            <img src={Image2} alt="f" />
            <img src={Image3} alt="twiter " />
          </div>

          <div className={styles.iconVisa}>
            <img src={Image4} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
