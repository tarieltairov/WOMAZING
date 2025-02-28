import styles from "./hero.module.scss";
import MainImage from "../../../../assets/images/hero_main.jpg";
import Image1 from "../../../../assets/images/hero-image.png";
import Image2 from "../../../../assets/images/hero_third.jpg";
import ArrowImage from "../../../../assets/icons/arrow_down.svg";
import { Button } from "../../../../components/Button/Button";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.title}>Новые поступления в этом сезоне</h1>
        <p className={styles.description}>
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </p>
        <div className={styles.btnsWrap}>
          <button className={styles.arrow}>
            <img src={ArrowImage} alt="arrow-img" />
          </button>
          <Button>Открыть магазин</Button>
        </div>
        <div className={styles.sliderBtns}>
          <button />
          <button className={styles.active} />
          <button />
        </div>
      </div>
      <div className={styles.images}>
        <img src={MainImage} alt="main-image" />
        <img className={styles.first} src={Image1} alt="img" />
        <img className={styles.second} src={Image2} alt="img" />
      </div>
      <div className={styles.right}></div>
    </section>
  );
};
