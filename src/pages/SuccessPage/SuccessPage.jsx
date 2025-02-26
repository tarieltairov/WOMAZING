import { Button } from "../../components/Button";
import styles from "./SuccessPage.module.scss";
import fileCheckIcon from "../../assets/icons/fileCheck.svg"
import { useNavigate } from "react-router-dom";
import { AppContainer } from "../../layouts/AppContainer";

export const SuccessPage = () => {

    const navigate = useNavigate();

    return (
        <AppContainer>
        <section className={styles.success}>
            <div className={styles.success__top}>
                <h1>Заказ получен</h1>
                <div className={styles.success__navigations}>
                    <a href="./">Главная</a>
                    <span>—</span>
                    <a href="./checkout">Оформление заказа</a>
                    <span>—</span>
                    <a href="/success" className={styles.success__nav__txt}>Заказ получен</a>
                </div>
            </div>
            <div className={styles.success__bottom}>
                <div className={styles.success__content}>
                    <img src={fileCheckIcon} alt="fileCheckIcon" />
                    <div className={styles.success__text}>
                        <h3>Заказ успешно оформлен</h3>
                        <p>Мы свяжемся с вами в ближайшее время!</p>
                    </div>
                </div>
                <Button onClick={() => navigate("/")} className={styles.success__button} children={"Перейти на главную"} variant={"outlined"}/>
            </div>
        </section>
        </AppContainer>
    )
}