import express from "express";
import bodyParser from "body-parser";
import routes from "./app/routes";

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

app.listen(PORT, () => {
    console.log("sucessfully Connected");
});
