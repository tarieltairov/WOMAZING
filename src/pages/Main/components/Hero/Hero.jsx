import ArrowImage from 'assets/icons/arrow_down.svg'
import Image1 from 'assets/images/hero-image.png'
import MainImage from 'assets/images/hero_main.jpg'
import Image2 from 'assets/images/hero_third.jpg'

import { useNavigate } from 'react-router-dom'

import { Button } from 'ui/Button'

import styles from './hero.module.scss'

export const Hero = () => {
  const navigate = useNavigate()
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
            <img
              src={ArrowImage}
              alt="arrow-img"
            />
          </button>
          <Button onClick={() => navigate('/shop')}>Открыть магазин</Button>
        </div>
        <div className={styles.sliderBtns}>
          <button />
          <button className={styles.active} />
          <button />
        </div>
      </div>
      <div className={styles.images}>
        <img
          className={styles.mainImg}
          src={MainImage}
          alt="main-image"
        />
        <img
          className={styles.first}
          src={Image1}
          alt="img"
        />
        <img
          className={styles.second}
          src={Image2}
          alt="img"
        />
      </div>
      <div className={styles.right}></div>
    </section>
  )
}
