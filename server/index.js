import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postroutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postroutes);

app.get("/", (req, res) => {
  res.send("Memories API");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(PORT));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set(`useFindAndModify`, false);
//
