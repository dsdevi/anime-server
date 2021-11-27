const express = require("express");
const router = express.Router();

const Movie = require("../models/Movie");

//CREATE
router.post("/add", (req, res) => {
  const newMovie = new Movie({
    anime_id: req.body.anime_id,
    title: req.body.title,
    image_url: req.body.image_url,
    source: req.body.source,
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

  newMovie
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ
//accessed by localhost:3000/movie with GET method
router.get("/", (req, res) => {
  Movie.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/movie/title with GET method

router.get("/:title", (req, res) => {
  Movie.findOne({ title: req.params.title })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/movie/update/ANIMEID with PUT method
router.put("/update/:animeId", (req, res) => {
  Movie.updateOne({ anime_id: req.params.animeId }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/movie/delete/ANIMEID with DELETE method
router.delete("/delete/:animeId", (req, res) => {
  Movie.deleteOne({ anime_id: req.params.animeId })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
