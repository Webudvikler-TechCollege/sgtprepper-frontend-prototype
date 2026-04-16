import { createButton } from "../atoms/index.js"

export const createloginButton = (loggedIn, onClick) => {
    const button = createButton()
    button.innerText = loggedIn ? 'Logout' : 'Login'
    button.addEventListener('click', onClick)
    return button
}