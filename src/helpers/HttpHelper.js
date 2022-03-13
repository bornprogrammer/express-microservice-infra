import axios from "axios";

import InternalServerError from "../errors/InternalServerError.js";

class HttpHelper {

  axiosConfig = {
    method: "get",
    url: "",
    params: {
    },
    headers: {
    },
  };

  setURL(url) {
    this.axiosConfig.url = url;
    return this;
  }

  setPayload(paylaod) {
    this.axiosConfig.method = "post";
    this.axiosConfig.data = paylaod;
    return this;
  }

  setQueryString(queryStringObj) {
    this.axiosConfig.params = queryStringObj;
    return this;
  }

  async call() {
    try {
      const result = axios(this.axiosConfig);
      return result;
    } catch (error) {
      throw new InternalServerError(error.message);
    }
  }
}

export default () => new HttpHelper();