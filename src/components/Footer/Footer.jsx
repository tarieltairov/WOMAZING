import styles from "./Footer.module.scss";
import Image1 from "../../assets/icons/instagram.svg";
import Image2 from "../../assets/icons/Facebook.svg";
import Image3 from "../../assets/icons/twiter.svg";
import Image4 from "../../assets/icons/visa-mastercard.svg";
import { LogoNav } from "../LogoNav";

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
            <div className={styles.divP}>
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
              <a href="https://www.instagram.com/">
                <img src={Image1} alt="instagram-icom" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={Image2} alt="Facebook" />
              </a>
              <a href="https://x.com/">
                <img src={Image3} alt="twiter" />
              </a>
            </div>

            <div className={styles.iconVisa}>
              <img src={Image4} alt="visa" />
            </div>
          </div>
        </div>
    </footer>

  );
}
