
import crypto from "crypto";

export default class RandomStringGenerator {

  static generateRandomString(len) {
    const result = crypto.randomBytes(len).toString("hex");
    return result;
  }
}