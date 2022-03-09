
import BaseController from "./BaseController.js";

import subUserServiceIns from "../services/SubUserService.js";

class SubUserController extends BaseController {

  async addSubUser(req) {
    // eslint-disable-next-line no-import-assign
    const result = await subUserServiceIns.addSubUser();
    return result;
  }

  async getSubUserList(req) {
    const result = await subUserServiceIns.getSubUserList();

    return result;
  }

  async updateSubUser(req) {
    const result = await subUserServiceIns.updateSubUser();
    return result;
  }

  async deleteSubUser(req) {
    const result = await subUserServiceIns.deleteSubUser();
    // eslint-disable-next-line no-unused-expressions
    result;
  }

}


export default new SubUserController();