/* eslint-disable lines-between-class-members */
import BaseService from "./BaseService.js";

class InterviewService extends BaseService {

  async addInterview() {
    const result = { candidateName: "arjun Kumar", candidateEmail: "ajrunk32@gmail.com" }
    return result;
  }
  async interviewList() {
    const result = [{ candidateName: "naman patel", candidateEmail: "namanpat4@gmail.com" }, { candidateName: "deepak shah", candidateEmail: "deepaksss12@gmail.com" }]
    return result;
  }
  async updateInterview(req) {
    const result = { candidateName: "rohan shah", candidateEmail: "rohanssh45@gmail.com", interviewId: req.params.interviewId }
    return result;
  }
  async deleteInterview() {
    const result = {};
    return result;
  }
}

export default new InterviewService();