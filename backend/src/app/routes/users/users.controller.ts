import { type Request, type Response, Router } from "express";
import User from "../../models/user.model";

const userRouter = Router();

userRouter.post("/users", async (req: Request, res: Response) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        res.status(400).send({ message: "Required information is missing." });
    }

    try {
        const existing_user = await User.findOne({ email });
        if (existing_user) {
            res.status(409).send({ message: "Email has Taken" });
            return;

        }
        const newUser = await User.create({
            email,
            username,
            password,
            role: "user"
        });

        res.status(201).send({ message: "user created!" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default userRouter;
