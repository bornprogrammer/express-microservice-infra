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
    this.test(input.customScreeningQuestions)
    return result;
    // return { skills: JSON.parse(input.skills), customSkills: JSON.parse(input.customSkills) };
  }

  async getScreeningQuestions() {
    const result = await ScreeningQuestion.find({});
    return result;
  }

  async getDomain(email) {
    // execute something
    // execute something
    // execute something
    // calling a function and return something test1
    const resut = this.test1(email);
    return "just var";
    // return this.test1();
  }

  async test1(email) {
    return { name: email, greet: this.greetPerson("ankit") };
  }

  async greetPerson(name) {
    // eslint-disable-next-line prefer-template
    return "Hello" + name;
  }

}


export default new PositionService();