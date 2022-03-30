import axios from "axios";
import ApiResponseError from "../errors/ApiResponseError.js";
import InternalServerError from "../errors/InternalServerError.js";

class HttpHelper {

  axiosConfig = {};

  constructor() {
    this.initAxiosConfig();
  }

  initAxiosConfig() {
    this.axiosConfig = {
      method: "",
      url: "",
      params: {
      },
      headers: {
      },
    };
  }

  setURL(url) {
    this.axiosConfig.url = url;
    return this;
  }

  setPath(pathVals) {
    this.axiosConfig.url += `/${pathVals.join("/")}`;
    return this;
  }

  setPayload(paylaod) {
    this.axiosConfig.data = paylaod;
    return this;
  }

  setQueryString(queryStringObj) {
    this.axiosConfig.params = queryStringObj;
    return this;
  }

  async get() {
    this.axiosConfig.method = "get";
    const response = await this.call();
    return response;
  }

  async post() {
    this.axiosConfig.method = "post";
    const response = await this.call();
    return response;
  }

  async put() {
    this.axiosConfig.method = "put";
    const response = await this.call();
    return response;
  }

  async delete() {
    this.axiosConfig.method = "delete";
    const response = await this.call();
    return response;
  }

  async patch() {
    this.axiosConfig.method = "patch";
    const response = await this.call();
    return response;
  }

  async call() {
    try {
      console.log("this.axiosConfig", this.axiosConfig);
      const result = await axios(this.axiosConfig);
      this.initAxiosConfig();
      return result;
    } catch (error) {
      this.initAxiosConfig();
      if (error.response) {
        throw new ApiResponseError(error);
      }
      throw new InternalServerError(error.message);
    }
  }
}

export default new HttpHelper();