/**
 * Empty html element
 */
export const clearElement = id => {
    const element = document.querySelector(`#${id}`)
    element.innerHTML = ''
}