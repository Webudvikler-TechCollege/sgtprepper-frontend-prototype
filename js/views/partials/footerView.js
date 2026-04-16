import { createParagraph } from "../components/atoms/index.js"


const renderFooter = async () => {
    const footer = document.querySelector('#footer')

    const p = createParagraph('TechCollege')
    footer.append(p)
}

export default renderFooter