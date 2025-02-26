import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductDetail.module.scss";
import { Button } from "../../components/Button/Button";
import { AppContainer } from "../../layouts/AppContainer";
import { Link } from "react-router-dom";
import Image from '../../assets/images/ProductPhoto(1).png'

export const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const product = {
    id: 1,
    image: Image,
    title: "T Shirt",
    price: "200$",
    newPrice: "120$",
  };

  if (!product) {
    return <h2>Товар не найден</h2>;
  }

  const isDisabled = !(selectedSize && selectedColor);

  const addToCart = () => {
    if (isDisabled) {
      setErrorMessage("Пожалуйста, выберите размер и цвет.");
      return;
    }

    const item = {
      ...product,
      selectedSize,
      selectedColor,
      quantity,
    };
    setCart((prevCart) => [...prevCart, item]);
    setErrorMessage("");
    alert("Товар добавлен в корзину!");
  };

  const productOption = {
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#927876", "#D4D4D4", "#FD9696", "#FDC796"],
  };

  return (
    <AppContainer>
      <div className={styles.productPage}>
        <div className={styles.titleNav}>
          <h1 className={styles.product__title}>{product.title}</h1>
          <nav className={styles.navigate}>
            <Link to="/">Главная</Link>
            <span> — </span>
            <Link to="">Свитшоты</Link>
            <span> — </span>
            <span className={styles.desc}>Свитшот Sweet Shot</span>
          </nav>
        </div>

        <div className={styles.product}>
          <div className={styles.product__image}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.product__info}>
            <div className={styles.priceWrap}>
              <span className={styles.newPrice}>{product.newPrice}</span>
              <span className={styles.oldPrice}>$450</span>
            </div>

            <div className={styles.product__sizes}>
              <p className={styles.p}>Выберите размер</p>
              <div className={styles.sizeOptions}>
                {productOption.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${
                      selectedSize === size ? styles.active : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.product__colors}>
              <p className={styles.p}>Выберите цвет</p>
              <div className={styles.colorOptions}>
                {productOption.colors.map((color) => (
                  <div
                    key={color}
                    className={`${styles.colorButton} ${
                      selectedColor === color ? styles.active : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.product__quantity}>
              <button>1</button>
              <Button onClick={addToCart} className={styles.btn}>
                Добавить в корзину
              </Button>
            </div>

            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}
          </div>
        </div>

        <div className={styles.relateWrap}>
          <h2 className={styles.relateTitle}>Связанные товары</h2>
          <div className={styles.relate}>
            <div className={styles.product__image}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.product__image}>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
