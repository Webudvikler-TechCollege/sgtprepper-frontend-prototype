import { createInput, createButton, createDiv } from "../atoms/index.js";

// Opretter en form-gruppe (label + input)
export const createAdd2Cart = (productId, value) => {
    console.log(1212);
    
    // Wrapper div til spacing
    const elm = createDiv()

    // Opretter input felt
    const input = createInput('number', 'quantity', 0);

    // Indsætter knap
    const button = createButton('Læg i kurv', 'submit')
    button.dataset.productId = productId

    // Samler label og input i div
    elm.append(input, button);

    return elm;
}