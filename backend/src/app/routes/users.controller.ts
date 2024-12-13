import { type Request, type Response, Router } from "express";
import User from "../models/user.model";

const userRouter = Router();

// Create a new user
userRouter.post("/users", async (req: Request, res: Response) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        res.status(400).send({ message: "Required information is missing." });
        return;
    }

    try {
        const existing_user = await User.findOne({ email });
        if (existing_user) {
            res.status(409).send({ message: "Email is already taken" });
            return;
        }

        const newUser = await User.create({
            email,
            username,
            password,
            role: "user",
        });

        res.status(201).send({ message: "User created successfully!", user: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

userRouter.get("/users/email", async (req: Request, res: Response) => {
    const { email } = req.query;

    if (!email) {
        res.status(400).send({ message: "Email is required" });
        return;
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        res.status(200).send({ user });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Get user by id
userRouter.get("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        res.status(200).send({ user });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Update user details
userRouter.put("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, username, password, role } = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { email, username, password, role }, { new: true });

        if (!updatedUser) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        res.status(200).send({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

// Delete user by id
userRouter.delete("/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            res.status(404).send({ message: "User not found" });
            return;
        }

        res.status(200).send({ message: "User deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal server error" });
    }
});

export default userRouter;
