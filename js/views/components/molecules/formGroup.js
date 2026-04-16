// Opretter en form-gruppe (label + input)
export const createFormGroup = (label, type, name, placeholder, value, className = '') => {
    // Wrapper div til spacing
    const div = createDiv('mb-4');

    // Opretter label (forbundet med input via name/id)
    const labelElm = createLabel(label, name);

    // Opretter input felt
    const input = createInput(type, name, placeholder, value, className);

    // Samler label og input i div
    div.append(labelElm, input);

    return div;
}