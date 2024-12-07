import express from "express";
import bodyParser from "body-parser";
import routes from "./app/routes";
import cors from 'cors'

const PORT = 3000;

const app = express();
app.use(cors({origin: "*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT, () => {
    console.log("sucessfully Connected");
});
