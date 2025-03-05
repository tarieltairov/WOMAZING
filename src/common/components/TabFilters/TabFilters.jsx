import styles from './TabFilters.module.scss'

export function TabFilters({ items = [], active, changeActive }) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => {
        return (
          <button
            key={index}
            className={
              item.value !== active
                ? styles.tab
                : `${styles.tab} ${styles.active}`
            }
            onClick={() => changeActive(item.value)}
          >
            {item.title}
          </button>
        )
      })}
    </div>
  )
}
