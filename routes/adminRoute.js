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

//READ
//accessed by localhost:3000/admin with GET method

router.get("/", (req, res) => {
  Admin.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/admin/username with GET method

router.get("/:username", (req, res) => {
  Admin.findOne({ username: req.params.username })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/admin/delete/username with DELETE method
router.delete("/delete/:username", (req, res) => {
  Admin.deleteOne({ username: req.params.username })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/admin/update/username with PUT method
router.put("/update/:username", (req, res) => {
  Admin.updateOne({ username: req.params.username }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
