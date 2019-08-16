// const router = require("express").Router();
const app = require("express").Router();
const Book = require("../Schema/book");

app.get("/api/users", async (req, res) => {
  try {
    console.log("inside users");
    const books = await Book.find({})
      .lean()
      .exec();
    res.status(200).json(books);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
// const usersControllerFactory = require("../controllers/users.controller");
// const usersApiPrefix = "/api/users";

// module.exports = apiPrefix => {
//     const usersController = usersControllerFactory(apiPrefix)

//     router.post("/", usersController.create)
//     router.post("/login", usersController.login)
//     return router;
// }
