
import User from "../mongo-schemas/User.js";
import BaseService from "./BaseService.js";

class UserService extends BaseService {

  async updateProfile(params) {
    const result = await User.findByIdAndUpdate(params?.userId, { ...params });
    return result;
  }
}

export default new UserService();