
import winston from "winston";

class LoggerHelper {

  logger;

  constructor() {
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.simple(),
      defaultMeta: { service: "user-service" },
      transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        // new winston.transports.File({ filename: "error.log", level: "error" }),
        // new winston.transports.File({ filename: "combined.log" }),
      ],
    });

    // if (config.get("name") !== "Production") {
    //   this.logger.add(new winston.transports.Console({
    //     format: winston.format.simple(),
    //   }));
    // }
  }

  info(log) {
    this.logger.info(log);
  }

  error(log) {
    this.logger.error(log);
  }

  warn(log) {
    this.logger.warn(log);
  }
}

export default new LoggerHelper();