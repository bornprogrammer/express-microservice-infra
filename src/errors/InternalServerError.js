
import HttpResponseError from "./HttpResponseError.js";
import HttpResponseStatus from "../constants/HttpResponseStatus.js";

export default class InternalServerError extends HttpResponseError {

  constructor(message) {
    const customMessage = message || "There is some internal server error";
    super(customMessage, HttpResponseStatus.INTERNAL_SERVER_ERROR);
  }
}