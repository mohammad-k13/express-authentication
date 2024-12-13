import { Router } from "express";
import userRouter from "./users.controller";
import authRouter from "./auth.controller";
import sessionRouter from "./session.controller";
import accountRouter from "./account.controller";

const api = Router().use(userRouter).use(authRouter).use(sessionRouter).use(accountRouter);

export default Router().use("/api/v1", api)