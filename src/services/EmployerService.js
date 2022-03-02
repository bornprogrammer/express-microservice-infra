
import BaseService from "./BaseService.js";
import User from "../mongo-schemas/User.js";

class EmployerService extends BaseService {

  async updateCompanyDetails(params) {
    const companyDetails = { ...params };
    delete companyDetails.userId;
    const result = User.findByIdAndUpdate(params.userId, { company: companyDetails });
    return result;
  }
}

export default new EmployerService();