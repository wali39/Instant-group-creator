import express = require("express");
import cookieParser = require("cookie-parser");
import logger = require("morgan");
import cors from "cors";
const debug = require("debug")("app");

const app = express();
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).json("test success");
});

const port = 4000;

app.listen(port, () => {
  debug(`Backend app listening at http://localhost:${port}`);
});
