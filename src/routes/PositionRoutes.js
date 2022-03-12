
import BaseRoutes from "./BaseRoutes.js";

import positionControllerIns from "../controllers/PositionController.js";

import multerUploaderMiddlewareIns from "../../infrastructure/middlewares/MulterUploader.js";

class PositionRoutes extends BaseRoutes {

  setRoutes() {
    this.router.get("/screening-questions", positionControllerIns.invoke(positionControllerIns.getScreeningQuestions));
    this.router.get("/domains", positionControllerIns.invoke(positionControllerIns.getDomain));
    this.router.get("/skills", positionControllerIns.invoke(positionControllerIns.getSkills));
    this.router.post("", multerUploaderMiddlewareIns.upload({ uploadDir: "job-description", fileKey: "jobDescription" }), positionControllerIns.invoke(positionControllerIns.createPosition));

    this.router.put("/:positionId", positionControllerIns.invoke(positionControllerIns.updatePosition));

    this.router.delete("/:positionId", positionControllerIns.invoke(positionControllerIns.deletePosition));

    this.router.get("", positionControllerIns.invoke(positionControllerIns.getPositions));
    return this.router;
  }
}

export default new PositionRoutes();
