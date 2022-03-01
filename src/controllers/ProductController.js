import BaseController from "./BaseController.js";
import productServiceIns from "../services/ProductService.js";

class ProductController extends BaseController {
  productService = productServiceIns;

  async getProductList(req, res) {
    const result = await this.productService.getProductList();
    return result;
  }
}

export default new ProductController();