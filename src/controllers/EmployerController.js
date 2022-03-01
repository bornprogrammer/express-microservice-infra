import BaseController from "./BaseController.js";
import employerServiceIns from "../services/EmployerService.js";

class EmployerController extends BaseController {
  employerService = employerServiceIns;

  async getUser(req, res) {
    const result = this.employerService.getUser();
  }
}

export default new EmployerController();