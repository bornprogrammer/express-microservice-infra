import mongoose from "mongoose";
import { InvalidRequestError, InvalidClientError, InvalidGrantError, UnsupportedGrantTypeError } from "oauth2-server";
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import HttpMethod from "../constants/HttpMethod.js";

class ResponseHelper {

  sendSuccessResponse(req, res, result) {
    let httpStatus = HttpResponseStatus.RESOURCES_FOUND;
    switch (req.method) {
      case HttpMethod.POST:
        httpStatus = HttpResponseStatus.RESOURCES_CREATED;
        break;
      case HttpMethod.DELETE:
        httpStatus = HttpResponseStatus.RESOURCES_DELETED;
        break;
      case HttpMethod.PUT:
        httpStatus = HttpResponseStatus.RESOURCES_CREATED;
        break;
      case HttpMethod.PATCH:
        httpStatus = HttpResponseStatus.RESOURCES_CREATED;
        break;
      case HttpMethod.GET:
        httpStatus = (result || (result instanceof Array && result.length === 0) || (result instanceof Object && Object.keys(result).length === 0)) ? HttpResponseStatus.RESPONSE_NOT_FOUND : HttpResponseStatus.RESOURCES_FOUND;;
        break;
      default:
        break;
    }
    this.sendResponse(res, httpStatus, this.buildResponseSchema(result));
  }

  sendResponse(res, status, response) {
    res.status(status).send(response);
  }

  sendErrorResponse(req, res, error) {
    if (this.isMongooseError(error)) {
      // db error
      this.sendResponse(res, 500, this.buildResponseSchema(null, error.message));
    } else if (this.isHttpResponseError(error)) {
      //
      this.sendResponse(res, error.code, this.buildResponseSchema(null, error.message));
    } else if (this.isOAuthServerError(error)) {
      // oauth2-server error
      this.sendResponse(res, error.code, this.buildResponseSchema(null, error.message));
    } else {
      // 500 internal server error
      this.sendResponse(res, 500, this.buildResponseSchema(null, error.message));
    }
  }

  isOAuthServerError(error) {
    return error instanceof InvalidRequestError || error instanceof InvalidClientError || error instanceof InvalidGrantError || error instanceof UnsupportedGrantTypeError;
  }

  isMongooseError(error) {
    return error instanceof mongoose?.Error?.ValidationError;
  }

  isHttpResponseError(error) {
    return error?.isHttpResponseError;
  }

  buildResponseSchema(result, message) {
    return { result, message: message || "" };
  }
}

export default new ResponseHelper();