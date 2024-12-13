import { Document, Types } from 'mongoose'

interface ISession extends Document {
      sessionToken: string,
      expires: Date,
      userId: Types.ObjectId
}

export default ISession