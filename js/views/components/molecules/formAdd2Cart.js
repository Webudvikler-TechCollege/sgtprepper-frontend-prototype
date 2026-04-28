import { createInput, createButton, createDiv, createForm } from "../atoms/index.js";

// Opretter en form-gruppe (label + input)
export const createAdd2Cart = (productId, handleClick) => {
    // Wrapper div til spacing
    const elm = createForm()

    // Opretter input felt
    const input = createInput('number', 'quantity', 0);

    // Indsætter knap
    const button = createButton('Læg i kurv', 'button')
    button.dataset.productId = productId

    button.addEventListener('click', e => {
        handleClick(e)
    })

    // Samler label og input i div
    elm.append(input, button);

    return elm;
}   