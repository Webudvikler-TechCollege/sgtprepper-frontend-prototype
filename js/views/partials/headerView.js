import { createDiv, createHeading } from "../components/atoms/index.js"

const renderHeader = ({ loginButton }) => {
    const header = document.querySelector('#header')

    const divLogo = createDiv()
    const h1 = createHeading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    divLogo.append(h1)

    const divOpts = createDiv()
    const button = loginButton
    divOpts.append(button)

    header.append(divLogo, divOpts)
}

export default renderHeader