
import BaseController from "./BaseController.js";
import masterServiceIns from "../services/MasterService.js";

class MasterController extends BaseController {

  async getIndustryTypeList(req) {
    const result = await masterServiceIns.getIndustryTypeList();
    return result;
  }
}

export default new MasterController();