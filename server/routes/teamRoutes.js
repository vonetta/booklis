const Router = require("express").Router();
const Team = require("../Schema/team");

Router.get("/api/teams", async (req, res) => {
  try {
    const teams = await Team.find({})
      .lean()
      .exec();
    res.status(200).json(teams);
  } catch (e) {
    console.error(e);
    res.status(500).send(e);
  }
});

Router.post("/api/team", async (req, res) => {
  const teamToCreate = req.body.team;

  try {
    const newTeam = await Team.create(teamToCreate);
    res.status(201).json(newTeam.toJSON(newTeam));
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = Router;
