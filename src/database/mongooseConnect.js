import mongoose from "mongoose";
import config from "config";
import seedData from "./seeder/index.js";

export default async () => {

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Connected successfully");
    seedData();
  });
  await mongoose.connect(config.get("mongo_uri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};