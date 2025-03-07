import { useNavigate } from 'react-router-dom'

import fileCheckIcon from '../../assets/icons/fileCheck.svg'
import { BreadCrumbs } from '../../common/ui/BreadCrumbs/BreadCrumbs'
import { Button } from '../../common/ui/Button/Button'
import { AppContainer } from '../../layouts/AppContainer'
import { ROUTER_PATHS } from '../../routes/routesPaths'

import styles from './SuccessPage.module.scss'

export const SuccessPage = () => {
  const navigate = useNavigate()

  return (
    <AppContainer>
      <section className={styles.success}>
        <div className={styles.success__top}>
          <h1>Заказ получен</h1>
          <BreadCrumbs
            crumbs={[
              { name: 'Главная', path: '/' },
              { name: 'Оформление заказа', path: '/checkout' },
              { name: 'Заказ получен', path: '/success' },
            ]}
          />
        </div>
        <div className={styles.success__bottom}>
          <div className={styles.success__content}>
            <img
              src={fileCheckIcon}
              alt="fileCheckIcon"
            />
            <div className={styles.success__text}>
              <h3>Заказ успешно оформлен</h3>
              <p>Мы свяжемся с вами в ближайшее время!</p>
            </div>
          </div>
          <Button
            onClick={() => navigate(ROUTER_PATHS.main)}
            className={styles.success__button}
            variant={'outlined'}
          >
            Перейти на главную
          </Button>
        </div>
      </section>
    </AppContainer>
  )
}
