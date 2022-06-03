import fsPromise from "fs/promises";

export default class UtilHelper {

  static generateRandomString(strLength) {
    return Buffer.from(Math.random().toString()).substr(10, strLength);
  }

  static isArrayValid(arr) {
    return arr && arr instanceof Array && arr.length > 0;
  }

  static isObjecyValid(obj) {
    return obj && obj instanceof Object && Object.keys(obj).length > 0;
  }

  static async readFile(path) {
    const fileData = await fsPromise.readFile(path, "utf8");
    return fileData;
  }

  static async reaEmailTempFile(fileName) {
    const htmlStr = await UtilHelper.readFile(`./src/email-temps/${fileName}`);
    return htmlStr;
  }

  static validJSONString(jsonString) {
    let isValidJsonString = false;
    if (jsonString) {
      try {
        isValidJsonString = JSON.parse(jsonString);
        if (!(isValidJsonString instanceof Object)) {
          isValidJsonString = false;
        }
      } catch (error) {
        isValidJsonString = false;
      }
    }
    return isValidJsonString;
  }
}