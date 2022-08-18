import mongoose from "mongoose";
import config from "./config";

const { MONGODB_URI } = config;

const DBConnection = () => {
   mongoose.connect(MONGODB_URI);

   mongoose.connection.once("open", () => {
    console.log("MongoDB connected successfully");
  }),
    "close", () => {
      process.exit(1);
    };
};

export default DBConnection;
