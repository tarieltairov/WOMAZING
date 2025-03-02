import { useState } from 'react'

import styles from './InputSectipon.module.scss'

export function InputSection() {
  const [name, setValue] = useState('')
  const [email, setEmail] = useState('')
  const [tell, setTell] = useState('')
  const [message, setMessage] = useState('')

  const [isSent, setIsSent] = useState(false)

  const handleNameChange = (event) => {
    setValue(event.target.value.trim())
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value.trim())
  }
  const handleTellChange = (event) => {
    setTell(event.target.value.trim())
  }
  const handleMessageChange = (event) => {
    setMessage(event.target.value.trim())
  }

  const handleSubmit = (event) => {
    if (!name || !email || !tell || !message) {
      alert('Заполните все поля!')
      return setIsSent(false)
    } else
      event.preventDefault() ||
        console.log('Отправка формы', { name, email, tell, message })
    setIsSent(true)
  }

  return (
    <section className={styles.inputSection}>
      <div className={styles.continer}>
        <h3>Напишите нам</h3>

        <form
          action=""
          className={styles.formContiner}
        >
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={handleNameChange}
          />

          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="text"
            placeholder="Телефон"
            value={tell}
            onChange={handleTellChange}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Сообщение"
            value={message}
            onChange={handleMessageChange}
          ></textarea>
          <div className={styles.continerBtn}>
            <button
              className={styles.btn1}
              onClick={handleSubmit}
            >
              Отправить
            </button>
            {isSent && (
              <div className={styles.btn2}>Сообщение успешно отправлено</div>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
