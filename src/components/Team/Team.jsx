import styles from "./Team.module.scss";

import leftArrow from "../../assets/icons/Team/left-arrow-icon.svg";
import rightArrow from "../../assets/icons/Team/right-arrow-icon.svg";
import TeamImage1 from "../../assets/images/Team/TeamImage1.jpg";
import TeamImage2 from "../../assets/images/Team/TeamImage2.jpg";
import TeamImage3 from "../../assets/images/Team/TeamImage3.jpg";
import { useState } from "react";

const images = [TeamImage1, TeamImage2, TeamImage3];

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className={styles.team}>
      <div className={styles.teamContainer}>
        <h2 className={styles.teamTitle}>Команда мечты Womazing</h2>

        <div className={styles.teamBody}>
          <div className={styles.slider}>
            <img
              className={styles.sliderLeft}
              src={leftArrow}
              onClick={prevSlide}
              alt="left-arrow-icon"
            />
            <div className={styles.sliderContainer}>
              <img
                src={images[currentIndex]}
                alt="slide"
                style={{
                  transform: `translateX(${isAnimating ? "-10px" : "0px"})`,
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                }}
              />
            </div>
            <img
              className={styles.sliderRight}
              src={rightArrow}
              onClick={nextSlide}
              alt="right-arrow-icon"
            />
          </div>

          <div className={styles.teamText}>
            <h2 className={styles.teamTextTitle}>Для каждой</h2>
            <p className={styles.teamTextSubtitle}>
              Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
              <span className={styles.teamTextSeparator}></span>
              Womazing ищет эти мелочи и создает прекрасные вещи, которые
              выгодно подчеркивают достоинства каждой девушки.
            </p>
            <button>Подробнее о бренде</button>
          </div>
        </div>
      </div>
    </section>
  );
};
