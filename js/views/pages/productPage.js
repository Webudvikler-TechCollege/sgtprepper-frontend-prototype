import { createArticle, createDiv, createHeading, createImage, createParagraph } from "../components/atoms/index.js";
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderProductPage = (product) => {    
    const { name, imageUrl, description, price, stockClass, stockText } = product
    const root = document.querySelector("#root");
    const view = createMainWrapper(name)
    
    const article = createArticle('flex justify-between gap-4 p-4 border rounded-lg mb-4 shadow-md')

    const img = createImage(`http://localhost:4000${imageUrl}`,name,'w-[300px] flex-shrink-0 rounded')
    article.append(img)
    
    const div = createDiv('min-w-0')

    const p1 = createParagraph(description, 'mb-2', true)
    div.append(p1)

    const p2 = createParagraph(stockText, stockClass)    
    div.append(p2)

    const p3 = createParagraph(`Pris: ${price}`, 'font-bold text-xl')
    div.append(p3)

    const p4 = createParagraph()    
    div.append(p4)

    article.append(div)
    view.append(article)
    root.append(view)
}

export default renderProductPage