import { createLi, createLink, createUl } from "../components/atoms/index.js"

const createNav = async data => {
    const ul = createUl('flex')
    
    data.map(item => {
        const li = createLi('mr-6')
        const a = createLink(`/index.htm#/products/${item.slug}`)
        a.innerText = item.title
        li.append(a)
        ul.append(li)
    })    
    return ul
}

export default createNav