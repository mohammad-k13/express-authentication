import { type Request, type Response, Router } from "express";
import User from "../../models/user.model";

const userRouter = Router();

userRouter.post("/users", async (req: Request, res: Response) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        res.status(403).send({ message: "information is not fully correct" });
    }

    try {
      const existing_user = await User.findOne({email});
      if(existing_user) {
            res.status(400).send({message: "Email has Taken"})
            return;
      }
      const newUser = await User.create({
            email,
            username,
            password,
      })
      console.log(newUser);

      res.status(200).send({message: "user created!"})
    } catch (err) {
      console.log(err);
      res.status(500).send({message: "Internal server error"})
    }
});

export default userRouter;
