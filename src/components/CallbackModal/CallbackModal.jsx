import styles from "./CallbackModal.module.scss"
import closeIcon from "../../assets/icons/close.svg"
import { Button } from "../Button"
import { useEffect, useState } from "react";
import { CallbackModalSuccess } from "../CallbackModalSuccess";

export const CallbackModal = ({isModalOpen, onClose}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
    const [isValid, setIsValid] = useState(false)

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^\+?\d{10,15}$/.test(phone);

    const handleSubmit = () => {
        if (name.trim() !== "" && isValidEmail(email) && isValidPhone(phone)) {
            setSuccessModalOpen(true);
            setName("")
            setEmail("")
            setPhone("")
        } else {
            setIsValid(true);
            setTimeout(() => setIsValid(false), 2000);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null;
    return(
        <section className={styles.callbackModal}>
            <div className={styles.container}>
                {isSuccessModalOpen ? (
                    <CallbackModalSuccess onClose={onClose} setModal={setSuccessModalOpen}/>
                ) : (
                <>
                    <img className={styles.close__icon} src={closeIcon} alt="close-icon" onClick={onClose}/>
                    <h2>Заказать обратный звонок</h2>
                    <input type="text" placeholder="Имя" className={`${isValid ? styles.noValidInp : ""}`} value={name} onChange={(e) => setName(e.target.value)} onKeyDown={handleKeyDown}/>
                    <input type="email" placeholder="E-mail" className={`${isValid ? styles.noValidInp : ""}`} value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown}/>
                    <input type="tel" placeholder="Телефон" className={`${isValid ? styles.noValidInp : ""}`} value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={handleKeyDown}/>
                    <Button onClick={handleSubmit} className={`${styles.button}`} variant={"filled"}>Заказать звонок</Button>
                </>
                )}
            </div>
        </section>
    )
}