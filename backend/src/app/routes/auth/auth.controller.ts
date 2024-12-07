import { type Request, type Response, Router } from "express"
import User from "../../models/user.model";

const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
      const { email, password } = req.body;

      if (!email || !password) {
          res.status(400).send({ message: "Required information is missing." });
      }
  
      try {
          const user = await User.findOne({email})
          if(!user){ res.status(404).send({message: "User Not Found"}); return;}

          const passwordMatch = await user.comparePassword(password)
          if(!passwordMatch) {
            res.status(401).send({message: "Invalid Password"});
            return;
          }

          res.status(200).send({ message: "Login successful" });
      } catch (err) {
          console.log(err);
          res.status(500).send({ message: "Internal server error" });
      }
})

export default authRouter;