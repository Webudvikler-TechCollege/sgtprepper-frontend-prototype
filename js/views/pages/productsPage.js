import { price2Dkk } from "../../utils/formatters.js";
import { createDiv, createHeading, createImage, createLink, createParagraph } from "../components/atoms/index.js"
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const renderProductsPage = (products, category) => {
    const root = document.querySelector("#root");
    const view = createMainWrapper('Produkter')
    
    products.map(item => {
        const { name, teaser, imageUrl, slug, stockClass, stockText, price } = item

        const productCard = createDiv('p-4 border rounded-lg mb-4 shadow-md')
        const link = createLink(`/index.htm#/products/${category}/${slug}`, 'flex items-center gap-4 min-w-0')

        // Første kolonne: Billede
        const imageCol = createDiv('shrink-0 w-[120px]')
        const img = createImage(`http://localhost:4000${imageUrl}`, name, 'w-[80px] h-auto rounded')
        img.loading = 'lazy'
        imageCol.append(img)
        link.append(imageCol)

        // Midterkolonne: Info
        const infoCol = createDiv('flex-1 min-w-0')
        const heading = createHeading(3, name, 'font-bold truncate')
        const teaserElm = createParagraph(teaser)
        const stock = createParagraph(stockText, `text-sm ${stockClass}`)
        infoCol.append(heading, teaserElm, stock)

        // Højre kolonne: Pris
        const priceCol = createDiv('shrink-0 w-[96px] text-right')
        const priceElm = createParagraph(price, 'mb-2 font-bold')
        priceCol.append(priceElm)

        link.append(imageCol, infoCol, priceCol)
        productCard.append(link)
        view.append(productCard)
    })

    root.append(view)
}

export default renderProductsPage