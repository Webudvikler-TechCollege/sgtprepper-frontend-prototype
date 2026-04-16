import { createLi, createLink, createUl } from "../components/atoms/index.js"

const renderNav = async data => {
    const nav = document.querySelector('#nav')
    const ul = createUl('flex')
    
    data.map(item => {
        const li = createLi('mr-6')
        const a = createLink(`/index.htm#/products/${item.slug}`)
        a.innerText = item.title
        li.append(a)
        ul.append(li)
    })    
    nav.append(ul)

}

export default renderNav