const express = require("express");
const router = express.Router();

const Show = require("../models/Show");

//CREATE
//accessed by localhost:3000/show/add with POST method
router.post("/add", (req, res) => {
  const newShow = new Show({
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
    premiered: req.body.premiered,
    broadcast: req.body.broadcast,
    related: req.body.related,
    producer: req.body.producer,
    licensor: req.body.licensor,
    studio: req.body.studio,
    genre: req.body.genre,
    opening_theme: req.body.opening_theme,
    ending_theme: req.body.ending_theme,
  });

  newShow
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ
//accessed by localhost:3000/show with GET method
router.get("/", (req, res) => {
  Show.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/show/title with GET method

router.get("/:title", (req, res) => {
  Show.findOne({ title: req.params.title })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/show/update/ANIMEID with PUT method
router.put("/update/:animeId", (req, res) => {
  Show.updateOne({ anime_id: req.params.animeId }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/show/delete/ANIMEID with DELETE method
router.delete("/delete/:animeId", (req, res) => {
  Show.deleteOne({ anime_id: req.params.animeId })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
