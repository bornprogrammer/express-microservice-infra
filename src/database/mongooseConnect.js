import mongoose from "mongoose";
import config from "config";

export default async () => {

  await mongoose.connect(config.get("mongo_uri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Connected successfully");
  });
};