/* eslint-disable no-shadow */
import { format, createLogger, transports } from "winston";

const { label, timestamp, combine, printf } = format;

const logFormat = printf(({ level, message, timestamp, service }) => `${timestamp} ${service} ${level} : ${message}`);

const developmentLoggerConf = () => ({
  format: combine(timestamp(), logFormat),
  transports: [
    new transports.Console(combine(timestamp(), logFormat)),
  ],
})



export default developmentLoggerConf;