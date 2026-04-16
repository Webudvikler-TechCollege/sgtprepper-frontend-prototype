import { getCategoryList } from "../models/categoryModel.js";
import renderNav from "../views/partials/navView.js";

export const navController = async () => {
  const data = await getCategoryList();
  renderNav(data);
};