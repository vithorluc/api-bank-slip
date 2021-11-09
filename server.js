import dotenv from "dotenv";
import express from "express";
import config from "config";
import consign from "consign";

const app = express();

dotenv.config();

app.set("port", process.env.PORT || config.get("server.port"));

const port = app.get("port");

consign({ cwd: "src" })
  .include("./config/middlewares/index.js")
  .then("utils")
  .then("services")
  .then("controllers")
  .then("routes")
  .into(app);

app.listen(port, () => {
  console.log(`Server Running on port ${port}`);
});
