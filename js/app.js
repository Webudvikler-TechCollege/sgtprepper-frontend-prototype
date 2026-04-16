import { initRouter } from "./router/router.js"
import { navController } from "./controllers/navController.js"
import { headerController } from "./controllers/headerController.js"
import { footerController } from "./controllers/footerController.js"

const initApp = () => {
  headerController()
  navController()
  footerController()
  initRouter()
}

initApp()