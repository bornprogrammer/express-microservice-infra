
import masterControllerIns from "../controllers/MasterController.js";

import BaseRoutes from "./BaseRoutes.js";

class MasterRoutes extends BaseRoutes {

  setRoutes() {
    this.router.get("/industry-type", masterControllerIns.invoke(masterControllerIns.getIndustryTypeList));
    return this.router;
  }
}

export default new MasterRoutes();