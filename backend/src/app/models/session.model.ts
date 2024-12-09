import mongoose from "mongoose";
import ISession from "../types/session.type";

const sessionSchema = new mongoose.Schema<ISession>({
      sessionToken: {
            type: "String",
            required: true,
            unique: true,
            trim: true,
      },
      userId: {
            type: "String",
            required: true,
            unique: true,
            trim: true,
      }
})


const Session = mongoose.model<ISession>("Session", sessionSchema)