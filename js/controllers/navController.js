import { getCategoryList } from "../models/categoryModel.js";
import { render } from "../utils/dom.js";
import createNav from "../views/partials/navView.js";

export const navController = async () => {
  const data = await getCategoryList();
  const navHtml = await createNav(data);
  render('nav', navHtml)
};