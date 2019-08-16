"use strict";

const express = require("express");
const { urlencoded, json } = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");
const userRoutes = require("./routes/userRoutes");

app.use(urlencoded({ extended: true }));
app.use(json());

const port = process.env.PORT || 3001;

app.use(bookRoutes);
app.use(userRoutes);

// start mongo connection pool, then start express app

mongoose
  .connect("mongodb://booklist:booklist1@ds135305.mlab.com:35305/booklist", {
    useNewUrlParser: true
  })
  .then(() =>
    app.listen(port, () => {
      console.log("server on port", port);
    })
  )
  .catch(e => console.error(e));
