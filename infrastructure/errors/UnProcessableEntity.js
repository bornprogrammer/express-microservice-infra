
import HttpResponseError from "./HttpResponseError.js";
import HttpResponseStatus from "../constants/HttpResponseStatus.js";

export default class UnProcessableEntity extends HttpResponseError {

  constructor(message) {
    const customMessage = message || "There is some error while adding/updating the record";
    super(customMessage, HttpResponseStatus.UNPROCESSABLE_ENTITY);
  }
}