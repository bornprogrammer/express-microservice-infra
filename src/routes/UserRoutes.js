
import userControllerIns from "../controllers/EmployerController.js";

import BaseRoutes from "./BaseRoutes.js";

class UserRoutes extends BaseRoutes {

  setRoutes() {
    this.router.get("/", userControllerIns.invoke(userControllerIns.getUser));
    return this.router;
  }
}

export default new UserRoutes();