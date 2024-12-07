import { type Request, type Response, Router } from "express";

const userRouter = Router();

userRouter.post("/users", async (req: Request, res: Response) => {
      console.log(req);
    const { email, password } = req.body;

    if (!email || !password) {
        res.send({ message: "information is not fully correct" });
    }

    try {
      console.log(email);
      console.log(password)
    } catch (err) {}
});

export default userRouter;
