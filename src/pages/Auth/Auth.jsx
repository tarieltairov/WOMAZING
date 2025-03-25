import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ROUTER_PATHS } from 'routes/routesPaths'

import styles from './Auth.module.scss'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'

export function Auth() {
  const navigate = useNavigate()
  const [hasAccount, setHasAccount] = useState(false)
  const user = useSelector((state) => state.global.user)

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
