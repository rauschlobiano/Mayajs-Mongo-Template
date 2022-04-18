import { configServer } from "@mayajs/core";
import { AppModule } from "./app.module";

import bodyParser from "body-parser";
import cors from "cors";
import env from "./environments";

var corsOptions = {
  //origin: "*",
  origin: [
    "http://localhost:3334",
    "https://parishfront-ljvn5.ondigitalocean.app",
  ],
  methods: ["GET", "PUT", "POST", "DELETE", "PATCH"],
  optionsSuccessStatus: 200,
};

configServer(3333)
  .usePlugins([
    bodyParser.urlencoded({ extended: false }),
    bodyParser.json(),
    cors(corsOptions),
  ])
  .bootstrapModule(AppModule);
