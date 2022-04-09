import mongooseConnect, { conn } from "./src/database/mongooseConnect.js";
import HttpHelper from "./src/helpers/HttpHelper.js";
import joiValidationHelper from "./src/helpers/joiValidationHelper.js";
import s3BucketFileUploaderIns from "./src/helpers/S3BucketFileUploader.js";
import UtilHelper from "./src/helpers/UtilHelper.js";
import BaseController from "./src/controllers/BaseController.js";
import BaseAppService from "./src/app-services/BaseAppService.js";
import BaseService from "./src/services/BaseService.js";
import IncruiterErrors from "./src/errors/index.js";
import appMiddleware from "./src/middlewares/AppMiddleware.js";
import multerUploaderIns from "./src/middlewares/MulterUploader.js";
import Constants from "./src/constants/index.js";
import logger from "./src/loggers/Logger.js";

const mongooseConnection = conn;
export default {
  mongooseConnect,
  mongooseConnection,
  HttpHelper,
  joiValidationHelper,
  BaseController,
  BaseService,
  IncruiterErrors,
  UtilHelper,
  s3BucketFileUploaderIns,
  appMiddleware,
  multerUploaderIns,
  Constants,
  logger,
  BaseAppService,
}




