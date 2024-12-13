import { compare } from "bcryptjs";
import { Request, Response, Router } from "express";
import { sign, verify } from "jsonwebtoken";
import User from "../models/user.model";
import Session from "../models/session.model";

const sessionRouter = Router();

sessionRouter.post("/sessions", async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).send({ message: "Email and password are required" });
        return;
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            res.status(401).send({ message: "Invalid credentials" });
            return;
        }

        const token = sign({ userId: user._id }, process.env.JWT_SECRET || "secret", { expiresIn: "1h" });

        const session = new Session({
            sessionToken: token,
            userId: user._id,
            expires: new Date(Date.now() + 3600 * 1000),
        });

        await session.save();

        res.status(200).send({ message: "Session created", sessionToken: token });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

sessionRouter.delete("/sessions", async (req: Request, res: Response) => {
    const { token } = req.body;

    if (!token) {
        res.status(400).send({ message: "Token is required" });
        return;
    }

    try {
        const session = await Session.findOneAndDelete({ sessionToken: token });

        if (!session) {
            res.status(404).send({ message: "Session not found" });
            return;
        }

        res.status(200).send({ message: "Session destroyed" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default sessionRouter;
