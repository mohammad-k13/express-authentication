import { type Request, type Response, Router } from "express"
import User from "../../models/user.model";
import Session from "../../models/session.model";
import { sign } from 'jsonwebtoken'

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


          const sessionToken = sign({userId: user._id}, process.env.SECERT_KYE || "", {expiresIn: "1h"})
          const session = await Session.create({sessionToken: sessionToken, userId: user._id})
          res.status(200).send({ message: "Login successful", sessionToken: session.sessionToken, url: user.role });
      } catch (err) {
          console.log(err);
          res.status(500).send({ message: "Internal server error" });
      }
})

export default authRouter;