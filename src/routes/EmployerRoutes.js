
import employerControllerIns from "../controllers/EmployerController.js";

import BaseRoutes from "./BaseRoutes.js";

class UserRoutes extends BaseRoutes {

  setRoutes() {
    this.router.put("/company/:userId", employerControllerIns.invoke(employerControllerIns.updateCompanyDetails));
    return this.router;
  }
}

export default new UserRoutes();