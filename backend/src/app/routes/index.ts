import { Router } from "express";
import userRouter from "./users/users.controller";
import authRouter from "./auth/auth.controller";

const api = Router().use(userRouter).use(authRouter);

export default Router().use("/api/v1", api)