const express = require("express");
const router = express.Router();

const User = require("../models/User");

//CREATE NEW USER
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


//READ
//accessed by localhost:3000/user with GET method

router.get("/", (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/user/username with GET method

router.get("/:username", (req, res) => {
  User.findOne({ username: req.params.username })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/user/delete/username with DELETE method
router.delete("/delete/:username", (req, res) => {
  User.deleteOne({ username: req.params.username })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/user/update/username with PUT method
router.put("/update/:username", (req, res) => {
  User.updateOne({ username: req.params.username }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
