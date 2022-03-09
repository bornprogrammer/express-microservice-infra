import BaseService from "./BaseService.js";

import Positions from "../mongo-schemas/Positions.js";

import ScreeningQuestion from "../mongo-schemas/ScreeningQuestion.js";

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
    return result;
    // return { skills: JSON.parse(input.skills), customSkills: JSON.parse(input.customSkills) };
  }

  async getScreeningQuestions() {
    const result = await ScreeningQuestion.find({});
    return result;
  }

}


export default new PositionService();