
export default class UtilHelper {

  generateRandomString(strLength) {
    return Buffer.from(Math.random().toString()).substr(10, strLength);
  }

  isArrayValid(arr) {
    return arr && arr instanceof Array && arr.length > 0;
  }

  isObjecyValid(obj) {
    return obj && obj instanceof Object && Object.keys(obj).length > 0;
  }
}