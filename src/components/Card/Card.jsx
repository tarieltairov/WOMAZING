import styles from "./Card.module.scss";
export const Card = ({ Arrow, product }) => {
  const { image, alt, name, oldPrice, price } = product;
  return (
    <div className={styles.imageSection__firstChild}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} className={styles.productPhoto} />
        <button className={styles.hoverButton}>
          <img src={Arrow} alt="ArrowToTheRight" />
        </button>
      </div>
      <h4>{name}</h4>
      <p className={styles.price}>
        {oldPrice && (
          <span className={styles.price__crossedOut}>${oldPrice}</span>
        )}
        ${price}
      </p>
    </div>
  );
};
