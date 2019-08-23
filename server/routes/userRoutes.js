const app = require("express").Router();
const User = require("../Schema/user");

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({})
      .lean()
      .exec();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get("/api/user/:id", async (req, res) => {
  const user = req.params.id;
  try {
    const user = await User.find({})
      .lean()
      .exec();
    res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post("/api/user", async (req, res) => {
  const userToCreate = req.body;
  console.log(req.body);
  try {
    const newUser = await User.create(userToCreate);
    res.status(201).json(newUser.toJSON(newUser));
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
