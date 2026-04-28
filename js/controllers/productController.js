import { addToCart } from "../models/cartModel.js";
import { getCategoryProducts, getProductDetails } from "../models/productModel.js";
import { isLoggedIn } from "../utils/auth.js";
import { render } from "../utils/dom.js";
import { price2Dkk } from "../utils/formatters.js";
import { createAdd2Cart } from "../views/components/molecules/formAdd2Cart.js";
import renderProductPage from "../views/pages/productPage.js";
import renderProductsPage from "../views/pages/productsPage.js";

/**
 * 
 * @param {*} category 
 */
export const renderProductList = async (category) => {

  const data = await getCategoryProducts(category || "vand-og-vandrensning");

  const formattedProducts = data.map(item => ({
    ...item,
    price: price2Dkk(item.price),
    stockText: item.stock
      ? 'På lager'
      : 'Forventes på lager indenfor 1 - 2 uger',
    stockClass: item.stock
      ? 'text-green-600'
      : 'text-red-600'
  }));

  const productsHtml = renderProductsPage(formattedProducts, category);
  render('root', productsHtml, true)
};

export const renderProductDetails = async (product) => {
  const data = await getProductDetails(product);

  // Byg formular (vis enten "Læg i kurv" eller "Log ind for at købe")
  const formElement = buildProductForm(data.id)

  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
    stockText: data.stock
      ? 'På lager'
      : 'Forventes på lager indenfor 1 - 2 uger',
    stockClass: data.stock
      ? 'text-green-600'
      : 'text-red-600',
    formElement: formElement
  }

  const productHtml = renderProductPage(formattedData);
  render('root', productHtml, true)
};

const buildProductForm = (productId) => {
  if (isLoggedIn) {
    const view = createAdd2Cart(productId, add2cart)
    return view
  } else {
    console.log('Du er ikke logget ind');
  }
}

export const add2cart = async elm => {
  const productId = elm.target.dataset.productId
  const quantity = elm.target.form.quantity.value;

  // Deaktiver knap og vis "Tilføjer..." mens det sker
  elm.target.disabled = true
  const originalText = elm.target.innerText
  elm.target.innerText = 'Tilføjer...'

  try {
    // Tilføj produkt til kurv i databasen
    const result = await addToCart(productId, quantity)

    if (result.id) {
      // Vis success-besked
      showButtonFeedback(elm.target, '✓ Tilføjet til kurv', 'bg-green-600', originalText, true)
    }
  } catch (error) {
    console.error(error)
    // Vis fejl-besked
    showButtonFeedback(elm.target, '✗ Fejl - prøv igen', 'bg-red-600', originalText, false)
  }
}

export const getLatestProducts = async () => {
    const data = await getAllProducts()   
    const sorted = [...data].sort((a, b) => a.createdAt - b.createdAt).reverse()
    const sliced = sorted.slice(0,3);
    productsView(sliced, '', 'Sidste nye produkter')
}

// Viser feedback på knappen (grøn ved succes, rød ved fejl)
const showButtonFeedback = (btn, message, colorClass, originalText, shouldReload) => {
  btn.innerText = message
  btn.className = btn.className + ' ' + colorClass

  // Efter 2 sekunder: nulstil knappen og genindlæs siden hvis success
  setTimeout(() => {
    btn.innerText = originalText
    btn.className = btn.className.replace(' ' + colorClass, '')
    btn.disabled = false

    if (shouldReload) {
      location.reload()
    }
  }, 2000)
}
