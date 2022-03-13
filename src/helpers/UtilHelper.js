


export default class UtilHelper {

  generateRandomString(strLength) {
    return Buffer.from(Math.random().toString()).substr(10, strLength);
  }
}