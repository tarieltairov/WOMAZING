import { TabFilters } from 'components/TabFilters'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { products } from '../../../../../mockData'
import Arrow from '../../../../assets/icons/ArrowToTheRight.png'
import ArrowRight from '../../../../assets/icons/arrow_right.svg'
import { Card } from '../../../../common/components/Card'

import styles from './Store.module.scss'

const allProducts = [...products]

export const Store = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9
  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItems = allProducts.slice(firstItemIndex, lastItemIndex)
  const totalPages = Math.ceil(allProducts.length / itemsPerPage)
  function renderPagination() {
    const btns = []
    for (let i = 1; i <= totalPages; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${styles.paginationBtn} ${
            i === currentPage ? styles.active : ''
          }`}
        >
          {i}
        </button>,
      )
    }
    return btns
  }

  const storeTabs = [
    {
      title: 'Все',
      value: 'all',
    },
    {
      title: 'Пальто',
      value: 'coat',
    },
    {
      title: 'Свитшоты',
      value: 'sweatshirt',
    },
    {
      title: 'Кардиганы',
      value: 'cardigan',
    },
    {
      title: 'Толстовки',
      value: 'smock',
    },
  ]

  const [active, setActive] = useState('all')

  function changeActive(tabValue) {
    setActive(tabValue)
  }
  return (
    <section className={styles.store}>
      <h1 className={styles.title}>Магазин</h1>
      <p className={styles.locations}>
        <span>Главная</span>
        <span>—</span>
        <span>Магазин</span>
      </p>
      <div className={styles.tabsContainer}>
        <TabFilters
          active={active}
          items={storeTabs}
          changeActive={changeActive}
        />
      </div>
      <div className={styles.products}>
        <p className={styles.countInfo}>
          Показано: {currentItems.length} из 12 товаров
        </p>
        <div className={styles.catalog}>
          {currentItems.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <Card
                  Arrow={Arrow}
                  product={item}
                />
              </button>
            )
          })}
        </div>

        <p className={styles.countInfo}>
          Показано: {currentItems.length} из 12 товаров
        </p>
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <button onClick={() => setCurrentPage((prev) => prev - 1)}>
              <img
                className={styles.leftArrow}
                src={ArrowRight}
                alt="arrow-right"
              />
            </button>
          )}
          {renderPagination()}
          {currentPage < totalPages && (
            <button onClick={() => setCurrentPage((prev) => prev + 1)}>
              <img
                src={ArrowRight}
                alt="arrow-right"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
