import { isLoggedIn } from "../utils/auth.js";
import { render } from "../utils/dom.js";
import { createSpan } from "../views/components/atoms/index.js";
import createHeader from "../views/partials/headerView.js";
import { cartButton } from "./cartController.js";
import { renderLoginButton } from "./loginController.js";

export const headerController = async () => {
  const loginBtn = await renderLoginButton()
  const cartBtn = await isLoggedIn() ? await cartButton() : createSpan()

  const headerHtml = createHeader({ loginBtn, cartBtn });
  render('header', headerHtml)
};