import BaseRoutes from "./BaseRoutes.js";
import InterviewControllerIns from "../controllers/InterviewController.js";

class InterviewRoutes extends BaseRoutes {
  setRoutes() {
    this.router.get("", InterviewControllerIns.invoke(InterviewControllerIns.addInterview));
    this.router.post("", InterviewControllerIns.invoke(InterviewControllerIns.interviewList));
    this.router.put("/:interviewId", InterviewControllerIns.invoke(InterviewControllerIns.updateInterview));
    this.router.delete("", InterviewControllerIns.invoke(InterviewControllerIns.deleteInterview));

    return this.router;

  }
}

export default new InterviewRoutes();