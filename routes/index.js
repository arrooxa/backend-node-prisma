const express = require("express");
const cors = require("cors");

const auth = require("./auth");
const defineLogByEnvironment = require("../config/morgan");

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  defineLogByEnvironment(app);

  app.get("/", (req, res) => res.send({ message: "Hello, World!" }));
  app.use("/auth", auth);

  // if (process.env.NODE_ENV === "production") {
  //   const fs = require("fs");
  //   const path = require("path");
  //   const rfs = require("rotating-file-stream");

  //   const logPath = path.join(process.cwd(), "logs");

  //   if (!fs.existsSync(logPath)) {
  //     fs.mkdirSync(logPath);
  //   }

  //   const accessLogStream = rfs.createStream("access.log", {
  //     size: "100M",
  //     path: path.join(process.cwd(), "logs"),
  //   });
  //   console.log("ui");
  //   app.use(morgan("combined", { stream: accessLogStream }));
  // } else {
  //   console.log("ui");
  // }
};
