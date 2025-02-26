import { Tab } from "../Tab";
import { Card } from "../Card";
import styles from "./Store.module.scss";
import productPhoto from "../../assets/images/ProductPhoto.png";
import productPhoto2 from "../../assets/images/ProductPhoto(1).png";
import productPhoto3 from "../../assets/images/ProductPhoto(2)..png";
import Arrow from "../../assets/icons/ArrowToTheRight.png";
import ArrowRight from "../../assets/icons/arrow_right.svg";
import { useState } from "react";
const allProducts = [];
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
for (let i = 0; i < 4; i++) {
  for (let product of products) {
    allProducts.push(product);
  }
}
export const Store = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allProducts.slice(firstItemIndex, lastItemIndex);
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  function renderPagination() {
    const btns = [];
    for (let i = 1; i <= totalPages; i++) {
      btns.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`${styles.paginationBtn} ${i === currentPage ? styles.active : ""}`}
        >
          {i}
        </button>
      );
    }
    return btns;
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
        <Tab active={styles.active}>Все</Tab>
        <Tab>Пальто</Tab>
        <Tab>Свитшоты</Tab>
        <Tab>Кардиганы</Tab>
        <Tab>Толстовки</Tab>
      </div>
      <div className={styles.products}>
        <p className={styles.countInfo}>Показано: 9 из 12 товаров</p>
        <div className={styles.catalog}>
          {currentItems.map((item) => {
            return (
              <Card
                key={item.id}
                image={item.image}
                alt={item.alt}
                Arrow={Arrow}
                name={item.name}
                price={item.price}
                oldPrice={item.oldPrice}
              />
            );
          })}
        </div>
        <p className={styles.countInfo}>Показано: 9 из 12 товаров</p>
        <div className={styles.pagination}>
          {currentPage > 1 && (
            <img
              className={styles.leftArrow}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              src={ArrowRight}
              alt="arrow-right"
            />
          )}
          {renderPagination()}
          {currentPage < totalPages && (
            <img
              onClick={() => setCurrentPage((prev) => prev + 1)}
              src={ArrowRight}
              alt="arrow-right"
            />
          )}
        </div>
      </div>
    </section>
  );
};
