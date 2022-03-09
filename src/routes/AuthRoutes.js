import authControllerIns from "../controllers/AuthController.js";
import BaseRoutes from "./BaseRoutes.js";
import oAuthAuthenticate from "../middlewares/OAuthAuthenticate.js";

class AuthRoutes extends BaseRoutes {

  setRoutes() {
    this.router.post("/signup", authControllerIns.invoke(authControllerIns.signUp));
    this.router.post("/oauth/token", authControllerIns.invoke(authControllerIns.authenticate));
    // eslint-disable-next-line no-undef
    // this.router.post("/subuser", authControllerIns.invoke(authControllerIns.addSubUser))


    return this.router;
  }
}

export default new AuthRoutes();