const express = require("express");
const router = express.Router();

const OVA = require("../models/OVA");

//CREATE
router.post("/add", (req, res) => {
  const newOVA = new OVA({
    anime_id: req.body.anime_id,
    title: req.body.title,
    image_url: req.body.image_url,
    source: req.body.source,
    episodes:req.body.episodes,
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

  newOVA
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ
//accessed by localhost:3000/ova with GET method
router.get("/", (req, res) => {
  OVA.find()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//READ ONE
//accessed by localhost:3000/ova/title with GET method
router.get("/:title", (req, res) => {
  OVA.findOne({ title: req.params.title })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//FILTER WHERE SCORE > X (example of a score: 6.78)
//accessed by localhost:3000/ova/score with GET method
router.get("/:score", (req, res) => {
  OVA.find({ score: { $gte: req.params.score } }) 
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//FILTER BY STUDIO (example: "Madhouse")
//accessed by localhost:3000/ova/studio with GET method
router.get("/:studio", (req, res) => {
  OVA.find({ studio: req.params.studio })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//GET ALL OVA SORTED BY POPULARITY
//accessed by localhost:3000/ova/popularity with GET method
router.get("/:popularity", (req, res) => {
  OVA.find().sort({"popularity":1})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//GET ALL OVA WHICH HAVE FINISHED AIRING
//accessed by localhost:3000/ova/airing with GET method
router.get("/:airing", (req, res) => {
  OVA.find({ airing: false })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//UPDATE
//accessed by localhost:3000/ova/update/anime_id with PUT method
router.put("/update/:animeId", (req, res) => {
  OVA.updateOne({ anime_id: req.params.animeId }, { ...req.body })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//DELETE
//accessed by localhost:3000/ova/delete/anime_id with DELETE method
router.delete("/delete/:animeId", (req, res) => {
  OVA.deleteOne({ anime_id: req.params.animeId })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
