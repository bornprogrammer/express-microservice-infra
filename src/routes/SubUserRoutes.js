import subUserControllerIns from "../controllers/SubUserController.js";
import BaseRoutes from "./BaseRoutes.js";

class SubUserRoutes extends BaseRoutes {
  setRoutes() {
    this.router.post("", subUserControllerIns.invoke(subUserControllerIns.addSubUser));
    this.router.get("", subUserControllerIns.invoke(subUserControllerIns.getSubUserList));
    this.router.put("/:subUserId", subUserControllerIns.invoke(subUserControllerIns.updateSubUser));
    this.router.delete("", subUserControllerIns.invoke(subUserControllerIns.deleteSubUser));

    return this.router;
  }


}
export default new SubUserRoutes();