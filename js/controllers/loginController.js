import { Authenticate } from "../models/loginModel.js";
import { isLoggedIn, logout } from "../utils/auth.js";
import { setCookie } from "../utils/cookies.js";
import { createLoginButton } from "../views/components/molecules/loginButton.js";
import renderLoginPage from "../views/pages/loginPage.js";

export const loginController = () => {
  renderLoginPage();
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
      location.href = '/index.htm'
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