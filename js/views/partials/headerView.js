import { createDiv, createFragment, createHeading, createLink } from "../components/atoms/index.js"

const createHeader = ({ loginBtn, cartBtn }) => {
    const header = createFragment()

    const divLogo = createDiv()
    const link = createLink('/index.htm')
    const h1 = createHeading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    link.append(h1)
    divLogo.append(link)

    const divOpts = createDiv('flex')
    divOpts.append(loginBtn, cartBtn)    

    header.append(divLogo, divOpts)
    return header
}

export default createHeader