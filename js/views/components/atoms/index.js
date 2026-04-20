export const createFragment = () => document.createDocumentFragment();

export const createDiv = (className = '') => {
  const el = document.createElement('div');
  el.className = className;
  return el;
};

export const createSection = (className = '') => {
  const el = document.createElement('section');
  el.className = className;
  return el;
};

export const createArticle = (className = '') => {
  const el = document.createElement('article');
  el.className = className;
  return el;
};

export const createParagraph = (text = '', className = '', parseHtml = false) => {
  const el = document.createElement('p');
  el.className = className;
  if(parseHtml) {
    el.innerHTML = text    
  } else {
    el.textContent = text;
  }
  return el;
};

export const createHeading = (level = 1, text = '', className = '') => {
  const safeLevel = Math.min(Math.max(level, 1), 6);

  const el = document.createElement(`h${safeLevel}`);
  el.className = className;
  el.textContent = text;

  return el;
};

export const createLink = (href, className = '') => {
  const el = document.createElement('a');
  el.href = href;
  el.className = className;
  return el;
};

export const createUl = (className = '') => {
  const el = document.createElement('ul');
  el.className = className;
  return el;
};

export const createLi = (className = '') => {
  const el = document.createElement('li');
  el.className = className;
  return el;
};

export const createImage = (src, alt = '', className = '') => {
  const el = document.createElement('img');
  el.src = src;
  el.alt = alt;
  el.className = className;
  return el;
};

/**
 * Form Fields
 */
export const createForm = (method = 'GET', className = '') => {
  const el = document.createElement('form');
  el.method = method;
  el.className = className;
  return el;
};

export const createLabel = (title,id) => {
    const el = document.createElement('label')
    el.htmlFor = id
    el.innerText = title
    el.className = 'mr-4 w-[120px] inline-block'
    return el
}

export const createInput = (type, name, placeholder, value = '', className = '') => {
  const el = document.createElement('input')
  el.type = type
  el.name = name
  el.autocomplete = true
  el.placeholder = placeholder || ''
  el.defaultValue = value
  el.className = className || 'border border-gray-300 rounded px-3 py-2 w-[400px]]'
  return el
}

export const createButton = (title, type = 'submit', className = 'text-white text-base border border-slate-400 px-2 py-1 rounded-md bg-slate-500 hover:bg-slate-800 inset-shadow-sm') => {
    const el = document.createElement('button')
    el.className = className
    el.textContent = title
    return el
}