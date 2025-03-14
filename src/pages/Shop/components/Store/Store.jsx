import { getProducts } from 'api/action'
import { TabFilters } from 'components/TabFilters'
import { categories } from 'constant/categories'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Arrow from '../../../../assets/icons/ArrowToTheRight.png'
import ArrowRight from '../../../../assets/icons/arrow_right.svg'
import { Card } from '../../../../common/components/Card'
import { BreadCrumbs } from 'ui/BreadCrumbs'

import styles from './Store.module.scss'

const updatedCategoriesForFilter = categories.map((i) => ({
  title: i.title,
  value: i.id,
}))

const storeTabs = [
  {
    title: 'Все',
    value: '',
  },
  ...updatedCategoriesForFilter,
]

const itemsPerPage = 9

export const Store = () => {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.global)
  const allProducts = products?.length ? [...products] : []
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)

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

  const [active, setActive] = useState('')

  function changeActive(tabValue) {
    setActive(tabValue)
    dispatch(getProducts({ categoryId: tabValue }))
  }

  useEffect(() => {
    dispatch(getProducts({}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <section className={styles.store}>
      <h1 className={styles.title}>Магазин</h1>
      <BreadCrumbs
        crumbs={[
          { name: 'Главная', path: '/' },
          { name: 'Магазин', path: '/shop' },
        ]}
      />
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
          {loading && <p>loading...</p>}
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
