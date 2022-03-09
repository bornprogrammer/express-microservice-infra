/* eslint-disable lines-between-class-members */
import BaseController from "./BaseController.js";
import interviewServiceIns from "../services/InterviewService.js";

class InterviewController extends BaseController {

  async addInterview(req) {
    // eslint-disable-next-line no-undef
    const result = await interviewServiceIns.addInterview();
    // eslint-disable-next-line no-undef
    return result;
  }

  async interviewList(req) {
    const result = await interviewServiceIns.interviewList();
    return result;
  }
  // eslint-disable-next-line lines-between-class-members
  async updateInterview(req) {
    const result = await interviewServiceIns.updateInterview();
    return result;
  }
  async deleteInterview(req) {
    const result = await interviewServiceIns.deleteInterview();
    return result;
  }

}

export default new InterviewController();
