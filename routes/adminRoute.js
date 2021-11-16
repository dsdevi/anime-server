const express = require("express");
const router = express.Router();

const Admin = require("../models/Admin");

router.post("/add", (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
    location: req.body.location,
    joined: Date.now(),
  });

  newAdmin
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
