import BaseService from "./BaseService.js";
import Product from "../mongo-schemas/Product.js";
import ProductFeature from "../mongo-schemas/ProductFeature.js";

class ProductService extends BaseService {
  async getProductList() {
    const result = await Product.find({ isActive: true, isDeleted: false }).populate({
      path: "ProductFeatures",
      match: { isActive: true, isDeleted: false },
    });
    return result;
  }
}

export default new ProductService();