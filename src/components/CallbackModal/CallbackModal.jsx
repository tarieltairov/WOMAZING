import "./CallbackModal.scss"
import closeIcon from "../../assets/icons/close.svg"
import { Button } from "../Button/Button"

export const CallbackModal = () => {
    return(
        <section className="callback-m-section">
            <div className="callback-m-container">
                <img className="close-icon" src={closeIcon} alt="close-icon" />
                <h2>Заказать обратный звонок</h2>
                <input type="text" placeholder="Имя"/>
                <input type="email" placeholder="E-mail"/>
                <input type="tel" placeholder="Телефон"/>
                <Button children={"Заказать звонок"} className={"callback-m-button"}/>
            </div>
        </section>
    )
}