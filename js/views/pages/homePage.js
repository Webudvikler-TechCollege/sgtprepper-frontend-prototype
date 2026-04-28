import { render } from "../../utils/dom.js";
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderHomePage = () => {
    const root = document.querySelector("#root");
    const homeHtml = createMainWrapper('Velkommen til forsiden', 'Her finder du prep produkter')

    

    render('root', homeHtml, true)
}

export default renderHomePage