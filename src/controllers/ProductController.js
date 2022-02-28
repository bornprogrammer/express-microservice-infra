import BaseController from "./BaseController.js";
import productServiceIns from "../services/ProductService.js";

class ProductController extends BaseController {
  productServiceIns = productServiceIns;

  async getProductList(req, res) {
    const result = await productServiceIns.getProductList();
    return result;
  }
}

export default new ProductController();