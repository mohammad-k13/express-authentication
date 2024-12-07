import { type Request, type Response, Router } from "express";

const userRouter = Router();

userRouter.post("/users", async (req: Request, res: Response) => {
      console.log(req);
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        res.status(403).send({ message: "information is not fully correct" });
    }

    try {
      
    } catch (err) {}
});

export default userRouter;
