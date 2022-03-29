import mongoose from "mongoose";

export default async ({ mongoUser, mongoPassword, mongoURL, mongoDB, logger }) => {

  const db = mongoose.connection;
  db.on("error", logger.error.bind(logger, "db connection error: "));
  db.once("open", () => {
    logger.info("db connected successfully");
  });
  const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoURL}/${mongoDB}`;
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
const conn = mongoose.connection;
export { conn };