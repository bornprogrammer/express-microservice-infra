import mongoose from "mongoose";

export default async ({ mongoUser, mongoPassword, mongoURL, mongoDB }) => {

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("Connected successfully");
  });
  const mongoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoURL}/${mongoDB}`;
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};