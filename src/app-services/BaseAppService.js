
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import HttpHelper from "../helpers/HttpHelper.js";

// will be extended by child app classed to be used for calling another micro service
export default class BaseAppService {

  httpHelperIns;

  // eslint-disable-next-line no-useless-constructor
  constructor() {
    this.httpHelperIns = new HttpHelper();
    this.initConfig();
  }

  initConfig() {
    this.setBaseURL();
  }

  setBaseURL() {
    const { apiServiceConf, serviceName } = this.getServiceDetails();
    const baseUrl = apiServiceConf.base_url;
    const port = apiServiceConf[serviceName].port ? `:${apiServiceConf[serviceName].port}` : "";
    const apiURL = `${baseUrl}${port}/${apiServiceConf.base_path}/${apiServiceConf[serviceName].path}`;
    this.httpHelperIns.setURL(apiURL);
  }

  setQueryString(queryStr) {
    this.httpHelperIns.setQueryString(queryStr);
    return this;
  }

  getServiceDetails() {
    return { apiServiceConf: "", serviceName: "" };
  }

  setPath(paths) {
    this.httpHelperIns.setPath(paths);
    return this;
  }

  setHeader(headers) {
    this.httpHelperIns.setHeaders(headers);
    return this;
  }

  async call(methodName) {
    try {
      const result = await this.httpHelperIns[methodName]();
      this.initConfig();
      return result.result;
    } catch (error) {
      this.initConfig();
      if (HttpResponseStatus.RESPONSE_NOT_FOUND === error.code) {
        return null;
      }
      throw error;
    }
  }

  async get() {
    const result = await this.call("get");
    return result;
    // try {
    //   const result = await this.httpHelperIns.get();
    //   this.initConfig();
    //   return result.result;
    // } catch (error) {
    //   this.initConfig();
    //   if (HttpResponseStatus.RESPONSE_NOT_FOUND === error.code) {
    //     return null;
    //   }
    //   throw error;
    // }
  }

  async getWithoutThrow() {
    try {
      const result = await this.httpHelperIns.get();
      this.initConfig();
      return result.result;
    } catch (error) {
      this.initConfig();
      throw error;
    }
  }

  async post(payload) {
    try {
      const result = await this.httpHelperIns.setPayload(payload).post();
      this.initConfig();
      return result.result;
    } catch (error) {
      this.initConfig();
      throw error;
    }
  }

  async put(payload) {
    try {
      const result = await this.httpHelperIns.setPayload(payload).put();
      this.initConfig();
      return result.result;
    } catch (error) {
      this.initConfig();
      throw error;
    }
  }

  async delete() {
    try {
      const result = await this.httpHelperIns.delete();
      this.initConfig();
      return result;
    } catch (error) {
      this.initConfig();
      throw error;
    }
  }
}