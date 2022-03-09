
import BaseController from "./BaseController.js";

import s3BucketFileUploaderIns from "../../infrastructure/helpers/S3BucketFileUploader.js";

import positionServiceIns from "../services/PositionService.js";

class PositionController extends BaseController {

  async getScreeningQuestions(req, res) {
    const result = positionServiceIns.getScreeningQuestions();
    return result;
  }

  getDomain(req, res) {

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