const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/add", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    location: req.body.location,
    preferences: req.body.preferences,
    joined: Date.now(),
  });

  newUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
