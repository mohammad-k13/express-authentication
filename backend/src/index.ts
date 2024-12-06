import express from "express";

const PORT = 3000;

const app = express();


app.get("/users", async (req, res, next) => {
      
})

app.listen(PORT, () => {
    console.log("sucessfully Connected");
});
