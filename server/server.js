"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongo = require("./mongodb");
require('dotenv').config()
// const conn = mongo.connection;
// const ObjectId = mongo.ObjectId;
const cors = require("cors");
const mainRouter = require("./routes");
const configMongoDB = require("./config/mongodb.config");

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000",
  optionSuccessStatus: 200
};
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const port = process.env.PORT || 3001;
app.use(mainRouter);

// start mongo connection pool, then start express app
mongo
  .connect("mongodb://booklist:booklist1@ds135305.mlab.com:35305/booklist")
  .then(() => configMongoDB(app))
  .then(() => app.listen(port))
  .then(() => console.log(`Magic happens on port:${port}`))
  .catch(err => {
    console.log("no connection to db");
    process.exit(1);
  });
