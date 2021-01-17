import React from "react"
import { navigate } from "gatsby"
import { useSelector, shallowEqual } from 'react-redux';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn, shallowEqual);
  if (!isLoggedIn && location.pathname !== `/member/login`) {
    navigate("/member/login")
    return null
  }
  return <Component {...rest} />
}
export default PrivateRoute