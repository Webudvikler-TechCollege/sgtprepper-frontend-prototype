import { handleLogin } from "../../controllers/loginController.js";
import { createButton, createForm, createHeading, createSection } from "../components/atoms/index.js";
import { createFormGroup } from "../components/molecules/formgroup.js"

const renderLoginPage = () => {
    const root = document.querySelector("#root");

    const section = createSection()
    const h1 = createHeading(1, 'Login', 'font-bold text-2xl')

    const form = createForm('GET', '')

    const username = createFormGroup('Brugernavn','text','username','Indtast brugernavn','')
    const password = createFormGroup('Adgangskode','password','password','Indtast adgangskode','')
    const button = createButton('Login','button')
    form.append(username, password, button)
    
    form.addEventListener('submit', (e) => {
        handleLogin(e)
    })

    section.append(h1, form)

    root.append(section)
}

export default renderLoginPage