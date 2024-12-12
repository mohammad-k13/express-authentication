import mongoose, { Schema } from "mongoose";
import ISession from "../types/session.type";
import { hash } from "bcryptjs";

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
}, {
      timestamps: true,
})

// sessionSchema.pre("save", async function(next){
//       this.sessionToken = await hash(this.userId._id.toString(), 10)
//       next();
// })

const Session = mongoose.model<ISession>("Session", sessionSchema)
export default Session;