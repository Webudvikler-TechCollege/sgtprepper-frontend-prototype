import { getProduct } from "../models/productModel.js";
import { price2Dkk } from "../utils/formatters.js";
import renderProductPage from "../views/pages/productPage.js";

export const productController = async (product) => {
  const data = await getProduct(product);

  const formattedData = {
    ...data,
    price: price2Dkk(data.price)
  }

  renderProductPage(formattedData);
};