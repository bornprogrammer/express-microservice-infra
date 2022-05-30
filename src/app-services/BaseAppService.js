/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */

import mongoose from "mongoose";
import HttpResponseStatus from "../constants/HttpResponseStatus.js";
import IncruiterServiceApiResponseError from "../errors/IncruiterServiceApiResponseError.js";
import HttpHelper from "../helpers/HttpHelper.js";
import UtilHelper from "../helpers/UtilHelper.js";

const { ObjectId } = mongoose.Types;
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
      const methodNameMapper = { get: "get", getWithoutThrow: "get", post: "post", put: "put", delete: "delete", patch: "patch" };
      const result = await this.httpHelperIns[methodNameMapper[methodName]]();
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
    this.httpHelperIns.setPayload(payload);
    const result = await this.call("post");
    return result;
  }

  async put(payload) {
    this.httpHelperIns.setPayload(payload);
    const result = await this.call("put");
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


  /**
   * will take the mongoose collections
   * @param {} collection 
   * @param {*} key 
   * @returns 
   */
  async mergeResouresToCollections(collection, resources, collectionKey, resourceKey = "_id", mergeKey = "") {
    if (collection && resources && collection instanceof Array && resources instanceof Array && collection.length > 0 && resources.length > 0) {
      return collection.map((item) => {
        const collectionItemValue = item[collectionKey];
        const findById = (resourcesList, id) => resourcesList.find((resourceItem) => resourceItem[resourceKey] === id.toString());
        let mappedResources;
        if (collectionItemValue && collectionItemValue instanceof Array && collectionItemValue.length > 0) {
          mappedResources = [];
          collectionItemValue.forEach((i) => {
            const findByIdResult = findById(resources, i);
            if (findByIdResult) {
              mappedResources = [...mappedResources, findByIdResult];
            }
          });
        } else if (collectionItemValue && ObjectId.isValid(collectionItemValue)) {
          mappedResources = findById(resources, collectionItemValue) || null;
          // mappedResources = mappedResources || null;
        } else {
          // mappedResources = collectionItemValue;
        }

        // if (mappedResources) {
        mergeKey = mergeKey || collectionKey;
        if (item["_doc"]) {
          item["_doc"][mergeKey] = mappedResources;
        } else {
          item[collectionKey] = mappedResources;
        }
        // }
        return item;
      });
    }
    return collection;
  }

  /**
   * will be used for extract out the ids by given key and call the api by extracted ids and merge the each item of resp by respective id to given merge key
   * @param {*} collection 
   * @param {*} collectionKey 
   * @param {*} resourceKey 
   * @param {*} mergeKey 
   * @returns 
   */
  async fetchNMergeResouresToCollections({ collection, collectionKey = "_id", resourceKey = "_id", mergeKey = "" }) {
    const fetchedResources = await this.fetchResouresByCollections(collection, collectionKey);
    const mergedResult = await this.mergeResouresToCollections(collection, fetchedResources, collectionKey, resourceKey, mergeKey);
    return mergedResult;
  }

  async fetchResouresByCollections(collection, collectionKey) {
    const collectionIds = await this.extractOutIdsFromCollection(collection, collectionKey);
    let result = []
    if (UtilHelper.isArrayValid(collectionIds)) {
      const commaSeperatedIds = collectionIds.join(",");
      result = await this.getResourcesByMultipleIds(commaSeperatedIds);
      return result;
    }
    // return [];
    return result;
  }

  /**
   * will extract out all ids from collection
   * @param {*} collection 
   * @param {*} collectionKey 
   * @returns 
   */
  async extractOutIdsFromCollection(collection, collectionKey) {
    if (collection && collection instanceof Array && collection.length > 0) {
      let idsArray = [];
      collection.forEach((item) => {
        if (item[collectionKey] && item[collectionKey] instanceof Array && item[collectionKey].length > 0) {
          idsArray = [...idsArray, ...item[collectionKey]];
        }
        idsArray = [...idsArray, item[collectionKey]];
      });
      return idsArray.filter((id) => id && id.length > 0);
    }
    return [];
  }

  /**
   * may be overridden by derived class
   * @param {*} commaSeperatedIds 
   * @returns 
   */
  async getResourcesByMultipleIds(commaSeperatedIds) {
    const result = await this.setPath([commaSeperatedIds]).get();
    return result;
  }
}