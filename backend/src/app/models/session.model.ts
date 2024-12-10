import mongoose, { Schema } from "mongoose";
import ISession from "../types/session.type";

const sessionSchema = new mongoose.Schema({
      sessionToken: {
            type: "String",
            required: true,
            unique: true,
            trim: true,
      },
      userId: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
      }
})


const Session = mongoose.model<ISession>("Session", sessionSchema)
export default Session;