const express = require("express");
const router = express.Router();

const Special = require("../models/Special");

router.post("/add", (req, res) => {
  const newSpecial = new Special({
    anime_id: req.body.anime_id,
    title: req.body.title,
    image_url: req.body.image_url,
    source: req.body.source,
    episodes: req.body.episodes,
    status: req.body.status,
    airing: req.body.airing,
    aired: req.body.aired,
    duration: req.body.duration,
    rating: req.body.rating,
    score: req.body.score,
    scored_by: req.body.scored_by,
    rank: req.body.rank,
    popularity: req.body.popularity,
    related: req.body.related,
    producer: req.body.producer,
    licensor: req.body.licensor,
    studio: req.body.studio,
    genre: req.body.genre,
    opening_theme: req.body.opening_theme,
    ending_theme: req.body.ending_theme,
  });

  newSpecial
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ
//accessed by localhost:3000/special with GET method
router.get("/", (req, res) => {
  Special.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/special/title/TITLE_NAME with GET method
router.get("/title/:title", (req, res) => {
  Special.findOne({ title: req.params.title })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//FILTER WHERE SCORE > X (example of a score: 6.78)
//accessed by localhost:3000/special/score/SCORE_VALUE with GET method
router.get("/score/:score", (req, res) => {
  console.log("test");
  console.log(typeof req.params.score);
  Special.find({ score: { $gte: req.params.score } })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//FILTER BY STUDIO (example: "Madhouse")
//accessed by localhost:3000/special/studio/STUDIO_NAME with GET method
router.get("/studio/:studio", (req, res) => {
  Special.find({ studio: req.params.studio })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//GET ALL Special SORTED BY POPULARITY
//accessed by localhost:3000/special/popularity with GET method
router.get("/popularity", (req, res) => {
  Special.find()
    .sort({ popularity: 1 })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//GET ALL Special WHICH HAVE FINISHED AIRING
//accessed by localhost:3000/special/airing with GET method
router.get("/airing", (req, res) => {
  Special.find({ airing: false })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/special/update/SHOWID with PUT method
router.put("/update/:showId", (req, res) => {
  Special.updateOne({ anime_id: req.params.showId }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/special/delete/SHOWID with DELETE method
router.delete("/delete/:showId", (req, res) => {
  Special.deleteOne({ anime_id: req.params.showId })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;

module.exports = router;
