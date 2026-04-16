import { createHeading, createParagraph, createSection } from "../atoms/index.js";

// Opretter wrapper til sider (title + meta + layout)
export const createMainWrapper = (title, description = '') => {
    // Sætter sidens titel
    document.title = title;

    // Finder eksisterende meta description
    let meta = document.querySelector('meta[name="description"]');

    // Hvis den ikke findes, opretter vi den
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
    }

    // Opdaterer indholdet
    meta.content = description;

    // Opretter section container
    const section = createSection();

    // Opretter heading
    const h1 = createHeading(1, title, 'font-bold text-2xl mb-4');
    section.append(h1);

    // Opretter beskrivelse (teaser)
    if (description) {
        const teaser = createParagraph(description);
        section.append(teaser);
    }

    return section;
}