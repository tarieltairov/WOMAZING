import styles from './NewCollection.module.scss';
import productPhoto from '../../assets/images/ProductPhoto.png';
import productPhoto2 from '../../assets/images/ProductPhoto(1).png';
import productPhoto3 from '../../assets/images/ProductPhoto(2)..png';
import Arrow from '../../assets/icons/ArrowToTheRight.png';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 1,
    image: productPhoto,
    alt: 'Футболка USA',
    name: 'Футболка USA',
    price: 129,
    oldPrice: 229,
  },
  {
    id: 2,
    image: productPhoto2,
    alt: 'Купальник Glow',
    name: 'Купальник Glow',
    price: 129,
  },
  {
    id: 3,
    image: productPhoto3,
    alt: 'Свитшот Sweet Shot',
    name: 'Свитшот Sweet Shot',
    price: 129,
  },
];

export function NewCollection() {
  const navigate = useNavigate();

  return (
    <section className={styles.secondSection}>
      <h2>Новая коллекция</h2>
      <div className={styles.imageSection}>
        {products.map(({ id, image, alt, name, price, oldPrice }) => (
          <div
            key={id}
            className={styles.imageSection__firstChild}
            onClick={() => navigate(`/product/${id}`)}
          >
            <div className={styles.imageWrapper}>
              <img src={image} alt={alt} className={styles.productPhoto} />
              <button className={styles.hoverButton}>
                <img src={Arrow} alt="ArrowToTheRight" />
              </button>
            </div>
            <h4>{name}</h4>
            <p className={styles.price}>
              {oldPrice && <span className={styles.price__crossedOut}>${oldPrice}</span>}${price}
            </p>
          </div>
        ))}
      </div>

      <Button variant="outlined" className={styles.btn}>
        Открыть магазин
      </Button>
    </section>
  );
}
