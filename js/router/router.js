import { cartController } from "../controllers/cartController.js";
import { homeController } from "../controllers/homeController.js";
import { loginController } from "../controllers/loginController.js";
import { renderProductDetails, renderProductList } from "../controllers/productController.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {

    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)

    if (segments.length === 0) {
        homeController();
        return;
    }

    // ["products"]
    if (segments[0] === "products") {
        if (segments.length === 2) {
            renderProductList(segments[1]);
            return;
        } else {
            renderProductDetails(segments[2]);
            return;
        }
    }

    // ["login"]
    if (segments[0] === "login") {
        loginController();
        return;
    }

    // ["cart"]
    if (segments[0] === "cart") {
        cartController();
        return;
    }

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}