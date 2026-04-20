import { createArticle, createButton, createDiv, createHeading, createImage, createInput, createParagraph } from "../components/atoms/index.js";
import { createFormGroup } from "../components/molecules/formGroup.js";
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderProductPage = (product) => {    
    const { name, imageUrl, description, price, stockClass, stockText, formElement } = product
    console.log(formElement);
    
    const root = document.querySelector("#root");
    const view = createMainWrapper(name)
    
    const article = createArticle('flex justify-between gap-4 p-4 border rounded-lg mb-4 shadow-md')

    const img = createImage(`http://localhost:4000${imageUrl}`,name,'w-[300px] flex-shrink-0 rounded')
    article.append(img)
    
    const div = createDiv('min-w-0')

    const pDesc = createParagraph(description, 'mb-2', true)
    div.append(pDesc)

    const pStock = createParagraph(stockText, stockClass)    
    div.append(pStock)

    const pPrice = createParagraph(`Pris: ${price}`, 'font-bold text-xl')
    div.append(pPrice)

    const pAdd2Cart = createParagraph('', 'pt-4')
    pAdd2Cart.append(formElement)
    div.append(pAdd2Cart)

    article.append(div)
    view.append(article)
    root.append(view)
}

export default renderProductPage