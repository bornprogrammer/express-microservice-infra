/* eslint-disable no-shadow */
import { format, transports } from "winston";

const { timestamp, combine, errors, json } = format;

const productionLoggerConf = () => ({
  format: combine(
    timestamp(),
    errors({ stack: true }),
    json(),
  ),
  transports: [
    new transports.Console(),
  ],
})



export default productionLoggerConf;