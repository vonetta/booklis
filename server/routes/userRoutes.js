const router = require("express").Router();

const usersControllerFactory = require("../controllers/users.controller");
const usersApiPrefix = "/api/users";

module.exports = apiPrefix => {
    const usersController = usersControllerFactory(apiPrefix)

    router.post("/", usersController.create)
    return router;
}