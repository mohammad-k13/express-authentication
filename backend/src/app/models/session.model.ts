import mongoose, { model, Types } from "mongoose";
import ISession from "../types/session.type";

const sessionSchema = new mongoose.Schema<ISession>({
      expires: {
            type: Date,
            required: true,
      },
      sessionToken: {
            type: String,
            required: true,
            trim: true,
      },
      userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
      }
}, {
      timestamps: true,
})

const Session = model<ISession>("Session", sessionSchema)

export default Session