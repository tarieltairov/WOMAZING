import { getCurrentProduct } from 'api/action'
import { productColors } from 'constant/productColors'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { useCart } from '../../../cartContext'
import Arrow from '../../assets/icons/ArrowToTheRight.png'
import { Card } from '../../common/components/Card'
import { Button } from '../../common/ui/Button/Button'
import { Counter } from '../../common/ui/Counter/Counter'
import { AppContainer } from '../../layouts/AppContainer'
import { BreadCrumbs } from 'ui/BreadCrumbs'

import styles from './ProductDetail.module.scss'

export const ProductDetail = () => {
  const dispatch = useDispatch()
  const { items, addItem } = useCart()
  const {
    responseForProducts,
    categories,
    currentProduct,
    isCurrentProductLoading,
  } = useSelector((state) => state.global)
  const { data } = responseForProducts
  const navigate = useNavigate()
  const { id } = useParams()
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [errorMessage, setErrorMessage] = useState('')
  const addedToCart = items?.find((product) => product.id === id)

  const relatedProductsByCategory = data?.filter(
    (item) => item.categoryId === currentProduct?.categoryId,
  )

  const isDisabled = !(selectedSize && selectedColor)

  const addToCart = () => {
    if (isDisabled) {
      setErrorMessage('Пожалуйста, выберите размер и цвет.')
      return
    }

    const itemForProduct = {
      ...currentProduct,
      quantity,
      selectedSize,
      selectedColor,
    }

    addItem(itemForProduct)
    setErrorMessage('')
    alert('Товар добавлен в корзину!')
  }

  const currentProductColors = productColors?.filter((item) =>
    currentProduct?.colors?.find((i) => i === item.id),
  )

  const currentProductCategory = categories?.find(
    (item) => item.id === currentProduct?.categoryId,
  )

  useEffect(() => {
    dispatch(getCurrentProduct(id))
  }, [id])

  if (isCurrentProductLoading) {
    return <h1>Loading...</h1>
  }

  if (!currentProduct) {
    return <h2>Товар не найден</h2>
  }

  return (
    <AppContainer>
      <div className={styles.productPage}>
        <div className={styles.titleNav}>
          <h1 className={styles.product__title}>{currentProduct.name}</h1>
          {currentProductCategory && (
            <BreadCrumbs
              crumbs={[
                { name: 'Главная', path: '/' },
                { name: currentProductCategory.title, path: '' },
                {
                  name: currentProduct.name,
                  path: `/product/${currentProduct.id}`,
                },
              ]}
            />
          )}
        </div>

        <div className={styles.product}>
          <div className={styles.product__image}>
            <img
              src={currentProduct.image}
              alt={currentProduct.alt}
            />
          </div>
          {addedToCart ? (
            <Button>Перейти в корзину</Button>
          ) : (
            <div className={styles.product__info}>
              <div className={styles.priceWrap}>
                <span className={styles.newPrice}>
                  {currentProduct.discountPrice ?? currentProduct.price}$
                </span>
                {currentProduct.discountPrice && (
                  <span className={styles.oldPrice}>
                    {currentProduct.price}
                  </span>
                )}
              </div>

              <div className={styles.product__sizes}>
                <p className={styles.p}>Выберите размер</p>
                <div className={styles.sizeOptions}>
                  {currentProduct?.sizes?.map((size) => (
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
                  {currentProductColors?.map(({ color, id }) => (
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
              <div>
                <Counter onChange={setQuantity} />
                <Button
                  onClick={() => addToCart && addToCart(quantity)}
                  className={styles.btn}
                  children={'Добавить в корзину'}
                ></Button>
              </div>

              {errorMessage && (
                <p className={styles.errorMessage}>{errorMessage}</p>
              )}
            </div>
          )}
        </div>

        <div className={styles.relateWrap}>
          <h2 className={styles.relateTitle}>Связанные товары</h2>
          <div className={styles.relate}>
            {relatedProductsByCategory?.map((relatedProduct) => (
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
