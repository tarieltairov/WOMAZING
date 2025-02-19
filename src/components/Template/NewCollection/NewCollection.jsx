import styles from "./NewCollection.module.scss";
import productPhoto from "../../../assets/images/Фото товара.png";
import productPhoto2 from "../../../assets/images/Фото товара (1).png";
import productPhoto3 from "../../../assets/images/Фото товара (2).png";
import Arrow from "../../../assets/icons/ArrowToTheRight.png"

export function NewCollection() {
    return (
        <section className={styles.secondSection}>
            <div className={styles.secondSection__child}>
                <h2>Новая коллекция</h2>

                <div className={styles.imageSection}>
                    <div className={styles.imageSection__firstChild}>
                        <div className={styles.imageWrapper}>
                            <img src={productPhoto} alt="Футболка USA" className={styles.productPhoto} />
                            <button className={styles.hoverButton}><img src={Arrow} alt="ArrowToTheRight" /></button>
                        </div>
                        <h4>Футболка USA</h4>
                        <p className={styles.price}><span className={styles.price__crossedOut}>$229</span> $129</p>
                    </div>

                    <div className={styles.imageSection__firstChild}>
                        <div className={styles.imageWrapper}>
                            <img src={productPhoto2} alt="Купальник Glow" className={styles.productPhoto2} />
                            <button className={styles.hoverButton}><img src={Arrow} alt="ArrowToTheRight" /></button>
                        </div>
                        <h4>Купальник Glow</h4>
                        <p className={styles.price}>$129</p>
                    </div>

                    <div className={styles.imageSection__firstChild}>
                        <div className={styles.imageWrapper}>
                            <img src={productPhoto3} alt="Свитшот Sweet Shot" className={styles.productPhoto3} />
                            <button className={styles.hoverButton}><img src={Arrow} alt="ArrowToTheRight" /></button>
                        </div>
                        <h4>Свитшот Sweet Shot</h4>
                        <p className={styles.price}>$129</p>
                    </div>
                </div>
                <div className={styles.ButtonOpenShop}>
                    <button className={styles.openShop}>Открыть магазин</button>
                </div>
            </div>
        </section>
    );
}
