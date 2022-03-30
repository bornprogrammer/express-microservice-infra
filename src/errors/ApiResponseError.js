import HttpResponseError from "./HttpResponseError.js";


export default class ApiResponseError extends HttpResponseError {

  data;

  constructor(error) {
    super(error.message, error.response.status);
    this.data = error.response.data;
  }
}