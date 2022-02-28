import productControllerIns from "../controllers/ProductController.js";
import BaseRoutes from "./BaseRoutes.js";

class ProductRoutes extends BaseRoutes {

  setRoutes() {
    this.router.get("", productControllerIns.invoke(productControllerIns.getProductList));
    return this.router;
  }
}

export default new ProductRoutes();