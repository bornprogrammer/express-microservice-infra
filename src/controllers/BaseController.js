import responseHelperIns from "../helpers/ResponseHelper.js";

export default class BaseController {

  invoke(ctrlCallable) {
    return async (req, res) => {
      try {
        const result = await ctrlCallable.call(this, req, res);
        responseHelperIns.processResultNSendResponse(req, res, result);
      } catch (error) {
        console.log("error from invoke method", error);
        responseHelperIns.sendErrorResponse(req, res, error);
      }
    };
  }
}