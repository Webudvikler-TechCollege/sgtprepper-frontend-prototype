import { createDiv, createInput, createLabel } from "../atoms/index.js"

export const createFormGroup = (label, type, name, placeholder, value, className = '') => {
    const div = createDiv('mb-4')
    const labelElm = createLabel(label, name)
    const input = createInput(type, name, placeholder, value, className)
    div.append(labelElm, input)
    return div
}