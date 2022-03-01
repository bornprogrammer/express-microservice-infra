
import IndustryType from "../mongo-schemas/IndustryType.js";
import BaseService from "./BaseService.js";

class MasterService extends BaseService {

  async getIndustryTypeList() {
    const result = await IndustryType.find({});
    return result;
  }

}

export default new MasterService();