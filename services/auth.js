import Devise from "./devise/devise"
var devise = new Devise({
  host: "http://127.0.0.1:3000",
  prefixUrl: "/api/v1",
  debug: false,
  authUrl: { base: "/customers" },
})
export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ email, password }) => {
  devise
    .signIn(email, password)
    .then(userDatas => {
      console.log(userDatas)
    })
    .catch(error => {
      console.log(error)
    })
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}

export const logout = callback => {
  setUser({})
  callback()
}
