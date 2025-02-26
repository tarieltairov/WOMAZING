import { Button } from "../Button"
import styles from "./CallbackModalSuccess.module.scss"

export const CallbackModalSuccess = ({onClose, setModal}) => {
    const setClose = () => {
        setModal(false);
        onClose();
    };

    return(
        <section className={styles.callbackModalSuccess}>
            <div className={styles.container}>
                <h2>Отлично! Мы скоро вам перезвоним.</h2>
                <Button onClick={setClose} className={styles.button} variant={"outlined"}>Закрыть</Button>
            </div>
        </section>
    )
}