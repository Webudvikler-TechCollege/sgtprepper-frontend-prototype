import { homeController } from "../controllers/homeController.js";
import { loginController } from "../controllers/loginController.js";
import { productController } from "../controllers/productController.js";
import { productsController } from "../controllers/productsController.js";
import { clearElement } from "../utils/dom.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {
    clearElement('root')

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
            productsController(segments[1]);
            return;
        } else {
            productController(segments[2]);
            return;
        }
    }

    // ["login"]
    if (segments[0] === "login") {
        loginController();
        return;
    }

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}