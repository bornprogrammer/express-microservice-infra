import mongooseConnect from "./src/database/mongooseConnect.js";
import HttpHelper from "./src/helpers/HttpHelper.js";
import joiValidationHelper from "./src/helpers/joiValidationHelper.js";
import BaseController from "./src/controllers/BaseController.js";
import BaseService from "./src/services/BaseService.js";

const incruiterApp = {
  mongooseConnect,
  HttpHelper,
  joiValidationHelper,
  BaseController,
  BaseService,
}

export default incruiterApp;




