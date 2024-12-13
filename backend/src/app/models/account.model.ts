import mongoose, { model } from "mongoose";
import IAccount from "../types/account.type";

const accountSchema = new mongoose.Schema<IAccount>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    type: {
        type: String,
        required: false,
        default: "",
    },
    provider: {
        type: String,
        required: false,
        default: "",
    },
    providerAccountId: {
        type: String,
        required: false,
        default: "",
    },
    refresh_token: {
        type: String,
        required: false,
        default: "",
    },
    access_token: {
        type: String,
        required: false,
        default: "",
    },
    expires_at: {
        type: Number,
        required: false,
    },
    token_type: {
        type: String,
        required: false,
        default: "",
    },
    scope: {
        type: String,
        required: false,
        default: "",
    },
    id_token: {
        type: String,
        required: false,
        default: "",
    },
    session_state: {
        type: String,
        required: false,
        default: "",
    },
});

const Account = model<IAccount>("Account", accountSchema);
export default Account;
