import { productColors } from 'constant/productColors'

import { useState } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { categories, products } from '../../../mockData'
import Arrow from '../../assets/icons/ArrowToTheRight.png'
import { Card } from '../../common/components/Card'
import { Button } from '../../common/ui/Button/Button'
import { AppContainer } from '../../layouts/AppContainer'
import { BreadCrumbs } from 'ui/BreadCrumbs'

import styles from './ProductDetail.module.scss'

export const ProductDetail = () => {
  const [cart, setCart] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [errorMessage, setErrorMessage] = useState('')

  const card = products.find((product) => product.id === Number(id))

  const relatedProductsByCategory = products.filter(
    (item) => item.categoryId === card.categoryId,
  )

  if (!card) {
    return <h2>Товар не найден</h2>
  }

  const isDisabled = !(selectedSize && selectedColor)

  const addToCart = () => {
    if (isDisabled) {
      setErrorMessage('Пожалуйста, выберите размер и цвет.')
      return
    }

    const item = {
      ...card,
      selectedSize,
      selectedColor,
      quantity,
    }

    setCart((prevCart) => [...prevCart, item])
    setErrorMessage('')
    alert('Товар добавлен в корзину!')
    navigate('/cart')
  }

  const currentProductColors = productColors.filter((item) =>
    card.colors.find((i) => i === item.id),
  )

  const currentProductCategory = categories.find(
    (item) => item.id === card.categoryId,
  )

  return (
    <AppContainer>
      <div className={styles.productPage}>
        <div className={styles.titleNav}>
          <h1 className={styles.product__title}>{card.name}</h1>
          {currentProductCategory && (
            <BreadCrumbs
              crumbs={[
                { name: 'Главная', path: '/' },
                { name: currentProductCategory.title, path: '' },
                { name: card.name, path: `/product/${card.id}` },
              ]}
            />
          )}
        </div>

        <div className={styles.product}>
          <div className={styles.product__image}>
            <img
              src={card.image}
              alt={card.alt}
            />
          </div>
          <div className={styles.product__info}>
            <div className={styles.priceWrap}>
              <span className={styles.newPrice}>
                {card.discountPrice ?? card.price}$
              </span>
              {card.discountPrice && (
                <span className={styles.oldPrice}>{card.price}</span>
              )}
            </div>

            <div className={styles.product__sizes}>
              <p className={styles.p}>Выберите размер</p>
              <div className={styles.sizeOptions}>
                {card.sizes.map((size) => (
                  <button
                    key={size}
                    className={`${styles.sizeButton} ${
                      selectedSize === size ? styles.active : ''
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
                {currentProductColors.map(({ color, id }) => (
                  <button
                    key={id}
                    className={`${styles.colorButton} ${
                      selectedColor === color ? styles.active : ''
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            <div className={styles.product__quantity}>
              <button onClick={() => setQuantity((prev) => prev + 1)}>
                {quantity}
              </button>
              <Button
                onClick={() => {
                  addToCart()
                }}
                className={styles.btn}
              >
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
            {relatedProductsByCategory.map((relatedProduct) => (
              <button
                key={relatedProduct.id}
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <Card
                  Arrow={Arrow}
                  product={relatedProduct}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  )
}
