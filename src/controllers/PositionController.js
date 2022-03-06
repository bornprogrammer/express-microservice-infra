
import BaseController from "./BaseController.js";

import s3BucketFileUploaderIns from "../../infrastructure/helpers/S3BucketFileUploader.js";

class PositionController extends BaseController {

  getScreeningQuestions(req, res) {

  }

  getDomain(req, res) {

  }

  async createPosition(req, res) {
    try {
      
      const result = await s3BucketFileUploaderIns.upload("sandeep.txt");
      return { Location: result.Location, file: req.file };
    } catch (error) {
      console.log("error", error);
      return error;
    }
    // return null;
  }

  updatePosition(req, res) {

  }

  deletePosition(req, res) {

  }

  getPositions(req, res) {

  }
}

export default new PositionController();