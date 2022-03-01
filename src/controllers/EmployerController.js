import BaseController from "./BaseController.js";
import employerServiceIns from "../services/EmployerService.js";
import { employerValidatonSchema } from "../joi-validation-schemas/employerValidatonSchema.js";
import joiValidationHelper from "../../infrastructure/helpers/joiValidationHelper.js";

class EmployerController extends BaseController {
  employerService = employerServiceIns;

  async updateBusinessDetails(req, res) {
    const payload = { ...req.body, userId: req.params.userId };
    const validatedValue = joiValidationHelper(employerValidatonSchema, payload);
    const result = await this.employerService.updateBusinessDetails(validatedValue);
    return result;
  }
}

export default new EmployerController();