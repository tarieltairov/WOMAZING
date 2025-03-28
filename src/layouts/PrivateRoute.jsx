import { setUserState } from 'store/globalSlise'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { ROUTER_PATHS } from 'routes/routesPaths'

const PrivateRoute = () => {
  const dispatch = useDispatch()
  const userFromStorage = JSON.parse(localStorage.getItem('user-data'))
  const user = useSelector((state) => state.global.user)

  useEffect(() => {
    if (!user && userFromStorage) {
      dispatch(setUserState(userFromStorage))
    }
  }, [])

  return userFromStorage ? (
    <Outlet />
  ) : (
    <Navigate
      to={ROUTER_PATHS.auth}
      replace
    />
  )
}

export default PrivateRoute
