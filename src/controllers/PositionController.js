
import BaseController from "./BaseController.js";

import s3BucketFileUploaderIns from "../../infrastructure/helpers/S3BucketFileUploader.js";

// eslint-disable-next-line import/no-named-as-default
import positionServiceIns from "../services/PositionService.js";

class PositionController extends BaseController {

  async getScreeningQuestions(req, res) {
    const result = await positionServiceIns.getScreeningQuestions();
    return result;
  }

  async getDomain(req, res) {
    const result = await positionServiceIns.getDomain();
    return result;
  }

  async getSkills(req, res) {
    const result = await positionServiceIns.getSkills();
    return result;

  }

  async createPosition(req, res) {
    // try {
    //   const result = await s3BucketFileUploaderIns.upload("sandeep.txt");
    //   return { Location: result.Location, file: req.file };
    // } catch (error) {
    //   console.log("error", error);
    //   return error;
    // }
    const result = await positionServiceIns.createPosition(req.body, req.file);
    return result;
  }

  updatePosition(req, res) {

  }

  deletePosition(req, res) {

  }

  getPositions(req, res) {

  }
}

export default new PositionController();