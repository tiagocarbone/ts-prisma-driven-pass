import express, { json } from "express";
import dotenv from "dotenv";
import router from "../src/routes/index";

dotenv.config();
const app = express();
app.use(json())
app.use(router)


app.listen(process.env.PORT || 5000, () => {
    console.log("server up")
})