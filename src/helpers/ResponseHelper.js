/* eslint-disable no-param-reassign */
import mongoose from "mongoose";
import { InvalidRequestError, InvalidClientError, InvalidGrantError, UnsupportedGrantTypeError, InvalidScopeError, AccessDeniedError, InsufficientScopeError, InvalidArgumentError, InvalidTokenError, ServerError, UnauthorizedClientError, UnauthorizedRequestError, UnsupportedResponseTypeError } from "oauth2-server";
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import HttpMethod from "../constants/HttpMethod.js";
import ApiResponseError from "../errors/ApiResponseError.js";

class ResponseHelper {

  sendSuccessResponse(req, res, result) {
    let httpStatus = HttpResponseStatus.RESOURCES_FOUND;
    switch (req.method) {
      case HttpMethod.POST:
        httpStatus = HttpResponseStatus.RESOURCES_CREATED;
        break;
      case HttpMethod.DELETE:
        httpStatus = HttpResponseStatus.RESOURCES_DELETED_WITH_NO_RESPONSE;
        result = null;
        break;
      case HttpMethod.PUT:
        httpStatus = HttpResponseStatus.RESOURCES_PUT_DELETED;
        break;
      case HttpMethod.PATCH:
        httpStatus = HttpResponseStatus.RESOURCES_CREATED;
        break;
      case HttpMethod.GET:
        httpStatus = HttpResponseStatus.RESOURCES_FOUND;
        break;
      default:
        break;
    }
    this.sendResponse(res, httpStatus, this.buildResponseSchema(result));
  }

  sendEmptyResponse(req, res, result) {
    let httpStatus = HttpResponseStatus.RESOURCES_FOUND;
    let message = "";
    switch (req.method) {
      case HttpMethod.POST:
        httpStatus = HttpResponseStatus.UNPROCESSABLE_ENTITY;
        message = "There is some error while adding the resources";
        break;
      case HttpMethod.DELETE:
        httpStatus = HttpResponseStatus.UNPROCESSABLE_ENTITY;
        message = "There is some error while adding the resources";
        break;
      case HttpMethod.PUT:
        httpStatus = HttpResponseStatus.UNPROCESSABLE_ENTITY;
        message = "There is some error while updating the resources";
        break;
      case HttpMethod.PATCH:
        httpStatus = HttpResponseStatus.UNPROCESSABLE_ENTITY;
        message = "There is some error while adding the resources";
        break;
      case HttpMethod.GET:
        httpStatus = HttpResponseStatus.RESPONSE_NOT_FOUND;
        message = "No Record found";
        break;
      default:
        break;
    }
    this.sendResponse(res, httpStatus, this.buildResponseSchema(null, message));
  }

  // result would be valid if servic method returns object/array in case of read/write/update/delete
  isResultValid(result) {
    return result && ((result instanceof Object && Object.keys(result).length > 0) || (result instanceof Array && result.length > 0))
  }

  sendResponse(res, status, response) {
    res.status(status).send(response);
  }

  processResultNSendResponse(req, res, result) {
    if (this.isResultValid(result)) {
      this.sendSuccessResponse(req, res, result);
    } else {
      this.sendEmptyResponse(req, res, result);
    }
  }

  sendErrorResponse(req, res, error) {
    if (this.isMongooseError(error)) {
      // db error
      this.sendResponse(res, 500, this.buildResponseSchema(null, error.message));
    } else if (this.isOAuthServerError(error)) {
      // oauth2-server error
      this.sendResponse(res, error.code, this.buildResponseSchema(null, error.message));
    } else if (this.isApiResponseError(error)) {
      this.sendResponse(res, error.code, this.buildResponseSchema(error.data, error.message));
    } else if (this.isHttpResponseError(error)) {
      this.sendResponse(res, error.code, this.buildResponseSchema(null, error.message));
    }
    else {
      this.sendResponse(res, 500, this.buildResponseSchema(null, error.message));
    }
  }

  isApiResponseError(error) {
    return error && error instanceof ApiResponseError;
  }

  isOAuthServerError(error) {
    return error instanceof InvalidRequestError || error instanceof InvalidClientError || error instanceof InvalidGrantError || error instanceof UnsupportedGrantTypeError || error instanceof InvalidScopeError || error instanceof AccessDeniedError || error instanceof InsufficientScopeError || error instanceof InvalidArgumentError || error instanceof InvalidTokenError || error instanceof ServerError || error instanceof UnauthorizedClientError || error instanceof UnauthorizedRequestError || error instanceof UnsupportedResponseTypeError;
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