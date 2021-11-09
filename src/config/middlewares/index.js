import bodyParser from "body-parser";
import cors from "cors";

const corsOptions = {
  credentials: true,
  origin: process.env.URL || "*",
};

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(cors(corsOptions));
};
