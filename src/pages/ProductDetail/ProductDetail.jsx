import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './ProductDetail.module.scss';
import { Button } from '../../components/Button/Button';
import { AppContainer } from '../../layouts/AppContainer';
import { products } from '../../components/Store/Store';
import { Card } from './../../components/Card/Card';
import Arrow from '../../assets/icons/ArrowToTheRight.png';
import React from 'react';

export const ProductDetail = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [errorMessage, setErrorMessage] = useState('');

  const card = products.find((product) => product.id === Number(id));

  console.log(cart);

  if (!card) {
    return <h2>Товар не найден</h2>;
  }

  const isDisabled = !(selectedSize && selectedColor);

  const addToCart = () => {
    if (isDisabled) {
      setErrorMessage('Пожалуйста, выберите размер и цвет.');
      return;
    }

    const item = {
      ...card,
      selectedSize,
      selectedColor,
      quantity,
    };

    setCart((prevCart) => [...prevCart, item]);
    setErrorMessage('');
    alert('Товар добавлен в корзину!');
    navigate('/cart');
  };

  const productOption = {
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['#927876', '#D4D4D4', '#FD9696', '#FDC796'],
  };

  return (
    <AppContainer>
      <div className={styles.productPage}>
        <div className={styles.titleNav}>
          <h1 className={styles.product__title}>{card.name}</h1>
          <nav className={styles.navigate}>
            <Link to="/">Главная</Link>
            <span> — </span>
            <Link to="">Свитшоты</Link>
            <span> — </span>
            <span className={styles.desc}>{card.name}</span>
          </nav>
        </div>

        <div className={styles.product}>
          <div className={styles.product__image}>
            <img src={card.image} alt={card.alt} />
          </div>
          <div className={styles.product__info}>
            <div className={styles.priceWrap}>
              <span className={styles.newPrice}>{card.price}$</span>
              {card.oldPrice && <span className={styles.oldPrice}>{card.oldPrice}</span>}
            </div>

            <div className={styles.product__sizes}>
              <p className={styles.p}>Выберите размер</p>
              <div className={styles.sizeOptions}>
                {productOption.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${selectedSize === size ? styles.active : ''}`}
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
                    className={`${styles.colorButton} ${selectedColor === color ? styles.active : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.product__quantity}>
              <button onClick={() => setQuantity((prev) => prev + 1)}>{quantity}</button>
              <Button
                onClick={() => {
                  addToCart();
                }}
                className={styles.btn}
              >
                Добавить в корзину
              </Button>
            </div>

            {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          </div>
        </div>

        <div className={styles.relateWrap}>
          <h2 className={styles.relateTitle}>Связанные товары</h2>
          <div className={styles.relate}>
            {products.map((relatedProduct) => (
              <div
                key={relatedProduct.id}
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <Card Arrow={Arrow} product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};
