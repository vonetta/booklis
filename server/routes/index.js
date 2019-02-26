"use strict";
const express = require("express");
const router = express.Router();

const bookApiPrefix = "/api/books";
const bookRoutes = require("./bookRoutes")(bookApiPrefix);

const path = require("path");
const contentPath = path.join(__dirname, "../../content");
module.exports = router;
router.use(express.static(contentPath));

//API Prefixes
console.log("index");
router.use(bookApiPrefix, bookRoutes);

useAPIErrorHandlers(router);

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/api/*", (req, res, next) => {
    res.sendStatus(404);
  });
  // Handle API 500
  router.use((err, req, res, next) => {
    if (!err) {
      return next();
    }
    // Log it
    console.log(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}
