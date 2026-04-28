import { createDiv } from "../components/atoms/index.js";
import { createMainWrapper } from "../components/molecules/mainWrapper.js";

const createCartPage = data => {
    const view = createMainWrapper('Indkøbskurv')

    const rowHead = createDiv('flex border-b-2 py-2')
    const quantityHead = createDiv('w-[10%] font-bold')
    quantityHead.textContent = 'Antal'
    const productHead = createDiv('w-[50%] font-bold')
    productHead.textContent = 'Produkt'
    const priceHead = createDiv('w-[20%] font-bold text-right')
    priceHead.textContent = 'Pris'
    const totalHead = createDiv('w-[20%] font-bold text-right')
    totalHead.textContent = 'Samlet'
    rowHead.append(quantityHead,productHead,priceHead,totalHead)
    view.append(rowHead)

    data?.items.map(item => {
        const { id, quantity, priceFormatted, totalFormatted, product } = item

        const row = createDiv('flex border-b-2 py-2')

        const colQuantity = createDiv('w-[10%]')
        colQuantity.textContent = `${quantity} stk.`

        const colProduct = createDiv('w-[50%]')
        colProduct.textContent = product.name

        const colPrice = createDiv('w-[20%] text-right')
        colPrice.textContent = priceFormatted

        const colTotal = createDiv('w-[20%] text-right')
        colTotal.textContent = totalFormatted

        row.append(colQuantity, colProduct, colPrice, colTotal)        
        view.append(row)
    })

    const rowTotal = createDiv('flex border-b-2 mb-10 py-4')
    const colText = createDiv('w-[80%] font-bold')
    colText.textContent = 'Samlet pris'
    const colTotal = createDiv('w-[20%] text-right font-bold')
    colTotal.textContent = data.cartTotal
    rowTotal.append(colText, colTotal)
    view.append(rowTotal)
    return view
}

export default createCartPage