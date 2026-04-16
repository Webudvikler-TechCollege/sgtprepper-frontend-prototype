import { createHeading, createParagraph, createSection } from "../atoms/index.js"

export const createMainWrapper = (title, description = '') => {
    document.title = title
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = description;
    document.head.appendChild(meta);

    const section = createSection()
    const h1 = createHeading(1, title, 'font-bold text-2xl mb-4')
    section.append(h1)
    const teaser = createParagraph(description)
    section.append(teaser)
    return section
}