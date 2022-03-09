import BaseService from "./BaseService.js";
// import User from "../mongo-schemas/User";

class SubUserService extends BaseService {

  async addSubUser() {
    // eslint-disable-next-line no-import-assign
    const result = { firstname: "Saurav", lastname: "joshi", email: "sauravjjoshi1@gmail.com" }

    return result;
  }

  async getSubUserList() {
    const result = [{ firstname: "rajesh", lastname: "doshi", email: "ssdfdsfd@gmail.com" }, { firstname: "akash", lastname: "patel", email: "akpatel3@gmail.com" }, { firstname: "ronak", lastname: "singh", email: "ronakk32@gmail.com" }]

    return result;
  }

  async updateSubUser(req) {
    const result = { firstname: "amit", lastname: "verma", email: "amitv12@gmail.com", id: req.params.subUserId }
    return result;
  }

  async deleteSubUser() {
    const result = {};
    // eslint-disable-next-line no-unused-expressions
    result;
  }


}

export default new SubUserService();
