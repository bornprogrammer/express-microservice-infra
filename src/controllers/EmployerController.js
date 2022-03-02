import BaseController from "./BaseController.js";
import employerServiceIns from "../services/EmployerService.js";
import { companyValidatonSchema } from "../joi-validation-schemas/employerValidatonSchema.js";
import joiValidationHelper from "../../infrastructure/helpers/joiValidationHelper.js";

class EmployerController extends BaseController {
  employerService = employerServiceIns;

  async updateCompanyDetails(req, res) {
    const payload = { ...req.body, userId: req.params.userId };
    const validatedValue = joiValidationHelper(companyValidatonSchema, payload);
    const result = await this.employerService.updateCompanyDetails(validatedValue);
    return result;
  }
}

export default new EmployerController();