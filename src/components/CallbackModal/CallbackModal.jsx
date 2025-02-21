import styles from "./CallbackModal.module.scss"
import closeIcon from "../../assets/icons/close.svg"
import { Button } from "../Button"

export const CallbackModal = () => {
    return(
        <section className={styles.callbackModal}>
            <div className={styles.container}>
                <img className={styles.close__icon} src={closeIcon} alt="close-icon" />
                <h2>Заказать обратный звонок</h2>
                <input type="text" placeholder="Имя"/>
                <input type="email" placeholder="E-mail"/>
                <input type="tel" placeholder="Телефон"/>
                <Button children={"Заказать звонок"} className={styles.button} variant={"filled"}/>
            </div>
        </section>
    )
}