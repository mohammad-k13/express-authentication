import { config } from "dotenv";
import mongoose from "mongoose";

config();
const MONGO_URI = process.env.DB_URL as string;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1)
  }
};

export default connectDB;