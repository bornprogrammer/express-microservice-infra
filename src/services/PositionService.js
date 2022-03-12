import BaseService from "./BaseService.js";

import Positions from "../mongo-schemas/Positions.js";

import ScreeningQuestion from "../mongo-schemas/ScreeningQuestion.js";

import Domain from "../mongo-schemas/Domain.js";

import Skills from "../mongo-schemas/Skills.js";

class PositionService extends BaseService {

  async createPosition(input, file) {
    const positionObject = {
      title: input.title,
      domain: input.domain,
      expRange: input.expRange,
      jobDescription: file.filename,
      skills: JSON.parse(input.skills),
      customScreeningQuestions: JSON.parse(input.customScreeningQuestions),
      screeningQuestions: JSON.parse(input.screeningQuestions),
    }

    const result = await Positions(positionObject).save();

    // this.createCustom(input.customScreeningQuestions);
    return result;
  }

  async createCustom(customScreeningQuestions1) {
    const customScreeningQuestions = JSON.parse(customScreeningQuestions1);
    console.log(customScreeningQuestions);
    customScreeningQuestions.forEach(async (item) => {
      const newResult = await ScreeningQuestion({
        question: item,
        type: "user_created",
      }).save();
      return newResult;
    })
  }

  async getScreeningQuestions() {
    const result = await ScreeningQuestion.find({ status: "inactive" });
    return result;
  }

  async getDomain() {
    const result = await Domain.find({ status: "active" });
    return result;
  }

  async getSkills() {
    const result = await Skills.find({ status: "active", type: "optional" });
    return result;
  }
}


export default new PositionService();