/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import mailGun from "mailgun-js";

import config from "config";

import UtilHelper from "./UtilHelper.js";

class EmailHelper {
  mailGunObj;

  constructor() {
    const mailGunConfig = config.get("mailgun");
    this.mailGunObj = mailGun({ apiKey: mailGunConfig.apiKey, domain: mailGunConfig.domain });
  }

  async sendEmail({ from, to, subject, htmlString, dataToBeMounted }) {
    const htmlStringWithData = this.mountData(htmlString, dataToBeMounted);
    const data = {
      from,
      to,
      subject,
      html: htmlStringWithData,
    };
    const result = await this.mailGunObj.messages().send(data);
    return result;
  }

  mountData(htmlString, dataToBeMounted) {
    if (UtilHelper.isObjecyValid(dataToBeMounted)) {
      for (const key in dataToBeMounted) {
        htmlString = htmlString.replace(new RegExp(`{{${key}}}`, "g"), dataToBeMounted[key]);
      }
    }
    return htmlString;
  }
}
export default () => new EmailHelper();