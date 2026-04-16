import { getProductList } from "../models/productModel.js";
import { price2Dkk } from "../utils/formatters.js";
import renderProductsPage from "../views/pages/productsPage.js";

export const productsController = async (category) => {
  
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