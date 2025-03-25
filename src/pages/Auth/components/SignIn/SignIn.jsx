import { signIn } from 'api/action'

import { useFormState, useFormStatus } from 'react-dom'
import { useDispatch } from 'react-redux'

import { Button } from 'ui/Button'

import styles from './SignIn.module.scss'

export function SignIn({ setHasAccount }) {
  const dispatch = useDispatch()
  const [state, formAction] = useFormState(signUpAction, null)
  const { pending } = useFormStatus()

  function signUpAction(_, formData) {
    const email = formData.get('email')
    const password = formData.get('password')

    if (!email || !password) {
      return { error: 'Все поля обязательны' }
    }

    const userData = { email, password }

    dispatch(signIn(userData))
    return { success: 'Регистрация успешна' }
  }

  return (
    <form
      className={styles.form}
      action={formAction}
    >
      <h1>Вход</h1>
      <input
        type="email"
        name="email"
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
      />
      {state?.error && <p className={styles.error}>{state.error}</p>}
      <Button
        variant="outlined"
        className={styles.save}
        onClick={() => setHasAccount(false)}
      >
        Нет Аккаунта? Зарегистрироваться
      </Button>

      <Button
        className={styles.save}
        disabled={pending}
      >
        {pending ? 'Загрузка...' : 'Войти'}
      </Button>
    </form>
  )
}
