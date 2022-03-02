import planControllerIns from "../controllers/PlanController.js";
import BaseRoutes from "./BaseRoutes.js";
import oAuthAuthenticate from "../middlewares/OAuthAuthenticate.js";

class PlanRoutes extends BaseRoutes {

  setRoutes() {
    this.router.get("/:productId", planControllerIns.invoke(planControllerIns.getPlans));
    return this.router;
  }
}

export default new PlanRoutes();