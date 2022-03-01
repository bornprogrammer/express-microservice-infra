import BaseController from "./BaseController.js";
import { planListSchema } from "../joi-validation-schemas/planValidationSchema.js";
import joiValidationHelper from "../../infrastructure/helpers/joiValidationHelper.js";
import planServiceIns from "../services/PlanService.js";

class PlanController extends BaseController {
  planService = planServiceIns;

  async getPlans(req, res) {
    const validatedValue = joiValidationHelper(planListSchema, { productId: req.params.productId });
    const result = await this.planService.getPlans(validatedValue);
    return result;
  }
}

export default new PlanController();