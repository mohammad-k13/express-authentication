import { Document, Types } from "mongoose"

interface IAccount extends Document {
      userId: Types.ObjectId,
      type: string,
      provider: string,
      providerAccountId: string,
      refresh_token: string,
      access_token: string,
      expires_at: number,
      token_type: string,
      scope: string,
      id_token: string,
      session_state: string,
}

export default IAccount;