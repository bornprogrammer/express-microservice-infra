
import BaseService from "./BaseService.js";
import Product from "../mongo-schemas/Product.js";
import Plan from "../mongo-schemas/Plan.js";

class PlanService extends BaseService {

  async getPlans({ productId }) {
    const result = await Plan.find({ product: productId, isActive: true, isDeleted: false }).populate({
      path: "benefits.productFeatures",
      match: { isActive: true, isDeleted: false },
    });
    return result;
  }
}

export default new PlanService();