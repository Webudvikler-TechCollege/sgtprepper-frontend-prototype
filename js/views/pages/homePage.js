import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderHomePage = () => {
    const root = document.querySelector("#root");
    const view = createMainWrapper('Velkommen til forsiden', 'Her finder du prep produkter')
    root.append(view)
}

export default renderHomePage