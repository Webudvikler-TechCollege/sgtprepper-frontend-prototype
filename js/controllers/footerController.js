import { render } from "../utils/dom.js";
import createFooter from "../views/partials/footerView.js";

export const footerController = () => {
  const footerHtml = createFooter()
  render('footer', footerHtml)
};