
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import IncruiterServiceApiResponseError from "../errors/IncruiterServiceApiResponseError.js";
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

  async call(methodName, methodParams) {
    try {
      const methodNameMapper = { get: "get", getWithoutThrow: "get", post: "post", put: "put", delete: "delete", patch: "patch" };
      const result = await this.httpHelperIns[methodNameMapper[methodName]](methodParams);
      this.initConfig();
      return result.result;
    } catch (error) {
      this.initConfig();
      if (methodName === "get" && HttpResponseStatus.RESPONSE_NOT_FOUND === error.code) {
        return null;
      }
      throw new IncruiterServiceApiResponseError(error);
    }
  }

  async get() {
    const result = await this.call("get");
    return result;
  }

  async getWithoutThrow() {
    const result = await this.call("getWithoutThrow");
    return result;
  }

  async post(payload) {
    const result = await this.call("post", payload);
    return result;
  }

  async put(payload) {
    const result = await this.call("put", payload);
    return result;
  }

  async delete() {
    const result = await this.call("delete");
    return result;
  }

  async patch() {
    const result = await this.call("patch");
    return result;
  }
}