const express = require("express");
const router = express.Router();

const User = require("../models/User");
const OVA = require("../models/OVA");
const Show = require("../models/Show");
const Special = require("../models/Special");
const Movie = require("../models/Movie");

const animeModels = {
  ova: OVA,
  show: Show,
  special: Special,
  movie: Movie,
};

//CREATE NEW USER
router.post("/add", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    showsCompleted: req.body.showsCompleted,
    gender: req.body.gender,
    location: req.body.location,
    birthDate: req.body.birthDate,
    joined: Date.now(),
    meanScore: req.body.meanScore,
    episodesWatched: req.body.episodesWatched,
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

//UPDATE
//accessed by localhost:3000/user/rate/username with PUT method
router.put("/rate/:username", (req, res) => {
  ratingsObj = req.body;
  ratedModel = animeModels[ratingsObj["type"]];

  ratedModel
    .findOne({ anime_id: ratingsObj["anime_id"] })
    .then((data) => {
      if (data) {
        console.log(data);
        userScore = ratingsObj["score"];
        score = data["score"];
        scored_by = data["scored_by"];

        data["scored_by"] = scored_by + 1;
        data["score"] =
          Math.round(
            ((score * scored_by + userScore) / (scored_by + 1)) * 100
          ) / 100;

        data
          .save()
          .then((data) => {
            User.findOneAndUpdate(
              { username: req.params.username },
              { $push: { ratings: ratingsObj } }
            )
              .then((data) => res.send("Rating added successfully"))
              .catch((err) => res.json(err));
          })
          .catch((err) => res.json(err));
      } else {
        res.send("Anime does not exist");
      }
    })
    .catch((err) => res.json(err));
});

module.exports = router;
