const app = require("express").Router();
const User = require("../Schema/user");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const saltRounds = 10;
app.use(passport.initialize());

app.post(
  "/api/user/login",

  async (req, res) => {
    console.log("inside");
    const password = req.body.password;
    const email = req.body.email;

    passport.use(
      new LocalStrategy(function(email, password, done) {
        console.log(email);
        console.log("passport");
        const user = User.findOne({ email }, function(err, user) {
          console.log("user");
          if (err) return done(err);
          if (!user) {
            return done(null, false, { message: "Incorrect email" });
          }
          return done(null, "yes");
          // const hash = user.password;
          // bcrypt.compare(password, hash, function(err, response) {
          //   if (response) {
          //     console.log(response);
          //     return done(null, user);
          //   } else {
          //     console.error(err);
          //     return done(null, false, { message: "Incorrect password" });
          //   }
          // });
        });
      })
    );
  }
);

app.post("/api/user", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const verified = req.body.verified;
  const dateRegistered = req.body.dateRegistered;
  try {
    bcrypt.hash(password, saltRounds, async function(err, hash) {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hash,
        verified,
        dateRegistered
      });
      res.status(201).json(newUser.toJSON(newUser));
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = app;
