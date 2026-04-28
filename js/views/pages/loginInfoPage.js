import { createButton, createParagraph } from "../components/atoms/index.js";
import { createLoginButton } from "../components/molecules/loginButton.js";
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderLoginInfoPage = async (user, button) => {
    const root = document.querySelector("#root");
    const view = createMainWrapper('Login')
    const p = createParagraph(`Du er logget ind som ${user.firstname} ${user.lastname} `)
    view.append(p, await button())
    return view
}

export default renderLoginInfoPage