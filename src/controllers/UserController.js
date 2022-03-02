import BaseController from "./BaseController.js";
import userServiceIns from "../services/UserService.js";
import joiValidationHelper from "../../infrastructure/helpers/joiValidationHelper.js";
import { updateProfile as updateProfileSchema } from "../joi-validation-schemas/userValidatonSchema.js";

class UserController extends BaseController {
  userService = userServiceIns;

  async updateProfile(req, res) {
    const bodyParams = { ...req.body, userId: req.params.userId };
    const validatedValue = joiValidationHelper(updateProfileSchema, bodyParams);
    const result = await this.userService.updateProfile(validatedValue);
    return result;
  }
}

export default new UserController();