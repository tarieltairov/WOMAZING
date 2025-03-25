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

export const Store = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { responseForProducts, loading, error } = useSelector(
    (state) => state.global,
  )

  const { data, items, pages } = responseForProducts

  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(9)
  const [tabValue, setTabValue] = useState('')
  const [search, setSearch] = useState('')

  function renderPagination() {
    const btns = []
    for (let i = 1; i <= pages; i++) {
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

  useEffect(() => {
    dispatch(
      getProducts({
        categoryId: tabValue,
        page: currentPage,
        limit,
        productName: search,
      }),
    )
  }, [tabValue, currentPage, limit, search])

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
        <input
          type="text"
          placeholder="Введите значение для поиска"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TabFilters
          active={tabValue}
          items={storeTabs}
          changeActive={(tab) => setTabValue(tab)}
        />
      </div>
      <div className={styles.products}>
        <p className={styles.countInfo}>
          Показано: {limit} из {items} товаров
        </p>
        <div className={styles.catalog}>
          {loading && <p>loading...</p>}
          {data?.map((item) => {
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
          Показано: {limit} из {items} товаров
        </p>
        <input
          type="number"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
        />
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
          {currentPage < pages && (
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
