/* eslint-disable arrow-body-style */

import { createLogger } from "winston";

import EnvironmentType from "../constants/EnvironmentType.js";

import developmentLoggerConf from "./developmentLoggerConf.js";

import productionLoggerConf from "./productionLoggerConf.js";

class Logger {

  logger;

  env;

  constructor(appName, env) {
    const defaulLoggerObj = {
      level: "info",
      format: null,
      defaultMeta: { service: appName },
      transports: [],
    };
    let envLoggerObj = null;
    if ([EnvironmentType.DEVELOPMENT, EnvironmentType.DEVELOPMENT_INTEGRATED].indexOf(env) >= 0) {
      envLoggerObj = developmentLoggerConf(appName);
    } else {
      envLoggerObj = productionLoggerConf(appName);
    }
    this.logger = createLogger({ ...defaulLoggerObj, ...envLoggerObj });
  }

  info(log) {
    this.logger.info(log);
  }

  log(log) {
    this.logger.log(log);
  }

  error(log) {
    this.logger.error(log);
  }

  warn(log) {
    this.logger.warn(log);
  }
}

export default (appName, env) => new Logger(appName, env);