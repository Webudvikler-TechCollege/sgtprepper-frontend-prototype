import { handleLogin } from "../../controllers/loginController.js";
import { createButton, createForm, createHeading, createSection } from "../components/atoms/index.js";
import { createFormGroup } from "../components/molecules/formgroup.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderLoginFormPage = () => {
    const view = createMainWrapper('Login')
    
    const form = createForm('GET', '')

    const username = createFormGroup('Brugernavn','text','username','Indtast brugernavn','')
    const password = createFormGroup('Adgangskode','password','password','Indtast adgangskode','')
    const button = createButton('Login','submit')
    form.append(username, password, button)
    
    form.addEventListener('submit', (e) => {
        handleLogin(e)
    })

    view.append(form)
    return view
}

export default renderLoginFormPage