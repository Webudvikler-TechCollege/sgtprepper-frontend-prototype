import { Authenticate } from "../models/loginModel.js";
import { isLoggedIn, logout } from "../utils/auth.js";
import { setCookie } from "../utils/cookies.js";
import { render } from "../utils/dom.js";
import { getToken } from "../utils/token.js";
import { createLoginButton } from "../views/components/molecules/loginButton.js";
import renderLoginFormPage from "../views/pages/loginFormPage.js";
import renderLoginInfoPage from "../views/pages/logininfoPage.js";

export const loginController = async () => {
  let loginHtml;
  if(await isLoggedIn()) {
    const strToken = await getToken()
    const { user } = strToken    
    loginHtml = renderLoginInfoPage(user, renderLoginButton)
  } else {
    loginHtml = renderLoginFormPage()
  }
  render('root', loginHtml, true)
}

export const handleLogin = async (e) => {
  e.preventDefault()

  const form = e.currentTarget

  // Nulstil tidligere fejlbeskeder
  form.username.setCustomValidity("")
  form.password.setCustomValidity("")

  // Hent værdier fra formular
  const username = form.username.value.trim()
  const password = form.password.value

  try {
    // Send login-anmodning til serveren
    const data = await Authenticate(username, password)    

    // Hvis login lykkedes, gem token og gå til forsiden
    if(data.accessToken) {
      setCookie('sgtprepper_token', JSON.stringify(data))
      window.location.reload()
    }
  } catch (error) {
    console.error(error)
  }
}

// Login/Logout-knap til header
export const renderLoginButton = async () => {
  const loggedIn = await isLoggedIn()
  let buttonTxt = loggedIn ? 'Log out' : 'Log in'

  const handleClick = () => {    
    if(loggedIn) {
      logout()
      location.reload()
    } else {
      window.location.href = '/index.htm#/login'
    }
  }
  
  return createLoginButton(buttonTxt, handleClick)
}