import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { CONNECTION_URI } from "./URIconfig.js"; // create a config file to store your connection credentials/URI
import postroutes from "../server/routes/posts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postroutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(PORT));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set(`useFindAndModify`, false);
//
