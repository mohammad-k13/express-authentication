import express, { Request, Response } from "express";
import routes from "./app/routes";
import cors from "cors";
import {config} from "dotenv"
import connectDB from "./app/services/database";

config()
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors({origin: "*", methods: "POST"}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res: Response, next) => {
    res.send("Backend Wroking")
})
app.use(routes);

app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send({ message: "Internal Server Error" });
});

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});
