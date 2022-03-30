
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import httpHelperIns from "../helpers/HttpHelper.js";

// will be extended by child app classed to be used for calling another micro service
export default class BaseAppService {

  httpHelper = httpHelperIns;

  // eslint-disable-next-line no-useless-constructor
  constructor(url) {
    this.initConfig();
  }

  initConfig() {
    this.setBaseURL();
  }

  setBaseURL() {
    // const apiURL = config.get("api_base_url") + url;
    // this.httpHelper.setURL(apiURL);
  }

  setPath(paths) {
    this.httpHelper.setPath(paths);
    return this;
  }

  async get() {
    try {
      const result = await this.httpHelper.get();
      this.initConfig();
      return result;
    } catch (error) {
      this.initConfig();
      if (HttpResponseStatus.RESPONSE_NOT_FOUND) {
        return null;
      }
      throw error;
    }
  }
}