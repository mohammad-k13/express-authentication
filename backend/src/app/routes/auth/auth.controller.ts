import { type Request, type Response, Router } from "express"

const authRouter = Router();

authRouter.post("/login", async (req: Request, res: Response) => {
      const { email, password } = req.body;

      if(!email || !password) res.status(403).send({message: "information required!"});

      try {

      } catch(err) {
            console.log(err);
      }
})

export default authRouter;