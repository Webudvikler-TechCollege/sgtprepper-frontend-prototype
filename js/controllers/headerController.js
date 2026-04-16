import renderHeader from "../views/partials/headerView.js";
import { renderLoginButton } from "./loginController.js";

export const headerController = async () => {
  const loginButton = await renderLoginButton()
  renderHeader({ loginButton });
};