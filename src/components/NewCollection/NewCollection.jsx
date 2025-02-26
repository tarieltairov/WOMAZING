import styles from "./NewCollection.module.scss";
import productPhoto from "../../assets/images/ProductPhoto.png";
import productPhoto2 from "../../assets/images/ProductPhoto(1).png";
import productPhoto3 from "../../assets/images/ProductPhoto(2)..png";
import Arrow from "../../assets/icons/ArrowToTheRight.png";
import { Button } from "../Button/Button";
import { Card } from "../Card";

const products = [
  {
    id: 1,
    image: productPhoto,
    alt: "Футболка USA",
    name: "Футболка USA",
    price: 129,
    oldPrice: 229,
  },
  {
    id: 2,
    image: productPhoto2,
    alt: "Купальник Glow",
    name: "Купальник Glow",
    price: 129,
  },
  {
    id: 3,
    image: productPhoto3,
    alt: "Свитшот Sweet Shot",
    name: "Свитшот Sweet Shot",
    price: 129,
  },
];

export function NewCollection() {
  return (
    <section className={styles.secondSection}>
      <h2>Новая коллекция</h2>
      <div className={styles.imageSection}>
        {products.map(({ id, image, alt, name, price, oldPrice }) => (
          <Card
            key={id}
            image={image}
            alt={alt}
            Arrow={Arrow}
            name={name}
            price={price}
            oldPrice={oldPrice}
          />
        ))}
      </div>

      <Button variant="outlined" className={styles.btn}>
        Открыть магазин
      </Button>
    </section>
  );
}
