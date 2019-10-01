const Router = require("express").Router();
const User = require("../Schema/user");
const UserSession = require("../Schema/userSession");

Router.post("/api/account/signup", (req, res, next) => {
  const { body } = req;
  const { firstName, lastName, password } = body;
  let { email } = body;

  if (!firstName) {
    return res.send({
      success: false,
      message: "Error: First name cannot be blank"
    });
  }

  if (!lastName) {
    return res.send({
      success: false,
      message: "Error: Last name cannot be blank"
    });
  }

  if (!email) {
    return res.send({
      success: false,
      message: "Error: email cannot be blank"
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: "Error: password cannot be blank"
    });
  }

  email = email.toLowerCase();

  //Strps:
  //1. Verify email doesnt Exist
  //2. Save

  User.find({ email }, (err, docs) => {
    if (err) {
      return res.status(500).send("Error: Server Error");
    } else if (docs.length > 0) {
      return res.status(400).send("User with this email already exist");
    }
    //save new user

    const newUser = new User();
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);

    newUser.save((err, user) => {
      if (err) {
        return res
          .status(500)
          .send({ success: false, message: "Error: Server error" });
      }
      return res.status(201).send("Signed Up");
    });
  });
});

Router.post("/api/account/signin", (req, res, next) => {
  const { body } = req;
  const { password } = body;
  let { email } = body;

  email = email.toLowerCase();

  if (!email) {
    return res.send({
      status: false,
      message: "Error: Email cannot be blank"
    });
  }

  if (!password) {
    return res.send({
      status: false,
      message: "Error: Password cannot be blank"
    });
  }

  User.find(
    {
      email
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: server error"
        });
      }

      if (users.length !== 1) {
        return res.send({ success: false, message: "Error: Invalid" });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Errors Invalid"
        });
      }

      //otherwise correct use
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: server error"
          });
        }
        return res.status(201).send({
          success: true,
          message: "Valid sign in",
          token: doc._id
        });
      });
    }
  );
});

Router.get("/api/account/verify", (req, res, next) => {
  const { query } = req;
  const { token } = query;

  UserSession.find(
    {
      _id: token,
      isDeleted: false
    },
    (err, sessions) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }

      if (sessions.length !== 1) {
        return res.status(400).send({
          success: false,
          message: "Error: Invalid more than 1 session"
        });
      } else {
        return res.status(200).send({
          success: true,
          message: "Token set",
          data: sessions
        });
      }
    }
  );
});

Router.get("/api/account/logout", (req, res, next) => {
  const { query } = req;
  const { token } = query;
  UserSession.findOneAndUpdate(
    {
      _id: token,
      isDeleted: false
    },
    { $set: { isDeleted: true } },
    null,
    (err, sessions) => {
      if (err) {
        return res.send({
          status: false,
          message: "Error: Server Error"
        });
      }

      return res.send({
        success: true,
        message: "logged out"
      });
    }
  );
});

Router.get("/api/currentUser", async (req, res, next) => {
  const { query } = req;
  const { userId } = query;

  User.findById(userId)
    .lean()
    .exec(function(err, results) {
      if (err) return console.error(err);
      try {
        res
          .status(200)
          .send({ success: true, message: "Recieved User", data: results });
      } catch (error) {
        console.error(err);
        res.status(500).send({ success: false, message: err });
      }
    });
});

module.exports = Router;
