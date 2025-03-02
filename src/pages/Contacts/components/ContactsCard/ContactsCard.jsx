import styles from './ContactsCard.module.scss'

const contacts = [
  { label: 'Телефон', value: '+7 (495) 823-54-12', href: 'tel:+74958235412' },
  {
    label: 'E-mail',
    value: 'info@sitename.com',
    href: 'mailto:info@sitename.com',
  },
  {
    label: 'Адрес',
    value: 'г. Москва, 3-я улица Строителей, 25',
    href: 'https://maps.app.goo.gl/DG7kFgezsWHMz6Ws9',
  },
]

export function ContactsCard() {
  return (
    <section className={styles.contactCard}>
      <div className={styles.heading}>
        <h1 className={styles.heading__contact}>Контакты</h1>
        <p className={styles.heading__paragraph}>
          Главная — <span className={styles.grayWord}>Контакты</span>
        </p>
      </div>

      <iframe
        title="Google Maps Location"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2249.0540195386!2d37.52973457274764!3d55.68804857761417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCc0L7RgdC60LLQsCwgMy3RjyDRg9C70LjRhtCwINCh0YLRgNC-0LjRgtC10LvQtdC5LCAyNQ!5e0!3m2!1sen!2skg!4v1740470955735!5m2!1sen!2skg"
        className={styles.map}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className={styles.description}>
        {contacts.map((contact, index) => (
          <div
            key={index}
            className={styles.description__child}
          >
            <p>{contact.label}</p>
            <a
              href={contact.href}
              className={styles.link}
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
