import { createButton, createImage, createLink } from "../atoms/index.js"

export const renderCartButton = numItems => {
    const elm = createLink('/index.htm#/cart', 'mt-1')
    const img = createImage('./assets/images/icons/cart.svg','', 'w-10 h-10')
    elm.append(img)
    /*
    const elm = createButton()

    elm.textContent = `${numItems} varer`

    // Gå til kurv-siden når der klikkes
    elm.addEventListener('click', () => {
        location.href = '/index.htm#/cart'
    })
    */
    return elm
}