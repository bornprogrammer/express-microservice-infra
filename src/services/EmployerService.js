
import BaseService from "./BaseService.js";
import User from "../mongo-schemas/User.js";

class EmployerService extends BaseService {

  async updateBusinessDetails(params) {
    const businessDetails = {};
    const result = User.findByIdAndUpdate(params.userId);
    return result;
  }
}

export default new EmployerService();