import { setUserState } from 'store/globalSlise'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ROUTER_PATHS } from 'routes/routesPaths'

import styles from './Auth.module.scss'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'

export function Auth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [hasAccount, setHasAccount] = useState(true)
  const user = useSelector((state) => state.global.user)
  const userFromStorage = JSON.parse(localStorage.getItem('user-data'))

  useEffect(() => {
    if (!user && userFromStorage) {
      dispatch(setUserState(userFromStorage))
    }
  }, [])

  useEffect(() => {
    if (user) {
      navigate(ROUTER_PATHS.main)
    }
  }, [user])

  return (
    <div className={styles.authPage}>
      {hasAccount ? (
        <SignIn setHasAccount={setHasAccount} />
      ) : (
        <SignUp setHasAccount={setHasAccount} />
      )}
    </div>
  )
}
