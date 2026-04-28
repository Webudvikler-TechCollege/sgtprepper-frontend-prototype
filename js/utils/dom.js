 /**
 * 
 * @param {*} el 
 */
export const render = (targetId, htmlElement, clearTarget = false) => {
    const el = document.getElementById(targetId)
    if(clearTarget) el.innerHTML = ''
    el.append(htmlElement)
}