import { getProduct, getProductList } from "../models/productModel.js";
import { isLoggedIn } from "../utils/auth.js";
import { price2Dkk } from "../utils/formatters.js";
import { createAdd2Cart } from "../views/components/molecules/formAdd2Cart.js";
import renderProductPage from "../views/pages/productPage.js";
import renderProductsPage from "../views/pages/productsPage.js";

/**
 * 
 * @param {*} category 
 */
export const renderProductList = async (category) => {
  
  const data = await getProductList(category || "vand-og-vandrensning");

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

  renderProductsPage(formattedProducts, category);
};

export const renderProductDetails = async (product) => {
  const data = await getProduct(product);

  // Byg formular (vis enten "Læg i kurv" eller "Log ind for at købe")
  const formElement = buildProductForm(data.id, await isLoggedIn())

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
  
  renderProductPage(formattedData);
};

const buildProductForm = (productId, isLoggedIn) => {
  if(isLoggedIn) {
    const view = createAdd2Cart(productId)    
    
    
    return view 
  } else {
    console.log('Du er ikke logget ind');
  }
}




