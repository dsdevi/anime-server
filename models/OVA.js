const mongoose = require("mongoose");

const OVASchema = mongoose.Schema({
  anime_id: Number,
  title: String,
  image_url: String,
  type: String,
  source: String,
  episodes:String,
  status: String,
  airing: Boolean,
  aired: {
    type: Map,
    of: String,
  },
  duration: String,
  rating: String,
  score: Number, //SHOULD CHANGE WITH USER RATING
  scored_by: Number, //SHOULD INCREMENT WITH USER RATING
  rank: Number,
  popularity: Number,
  related: {
    type: Map,
    of: mongoose.SchemaTypes.Mixed,
  },
  producer: String,
  licensor: String,
  studio: String,
  genre: String,
  opening_theme: [String],
  ending_theme: [String],
});

module.exports = mongoose.model("OVA", OVASchema);


//SAMPLE FOR POSTMAN
/*
{
    "anime_id": "1940",
    "title": "Outlanders",
    "image_url": "https://myanimelist.cdn-dena.com/images/anime/11/15637.jpg",
    "source": "Manga",
    "episodes":1,
    "status": "Finished Airing",
    "airing": false,
    "aired":{"from": "1986-12-16", "to": "1986-12-16"},
    "duration": "51 min.",
    "rating": "R - 17+ (violence & profanity)",
    "score": 6.1,
    "scored_by": 1742,
    "rank": 7090,
    "popularity": 5563,
    "related":{"Adaptation": [{"mal_id": 4281, "type": "manga", "url": "https://myanimelist.net/manga/4281/Outlanders", "title": "Outlanders"}]},
    "producer": "Tatsunoko Production",
    "licensor": "Central Park Media",
    "studio": "Diomedea",
    "genre": "Sci-Fi, Adventure, Comedy, Ecchi, Shounen",
    "opening_theme":[],
    "ending_theme":["Starry Eyes: Hoshi no Hitomi (Starry eyes-æ˜Ÿã®çž³-) by NA&#039;MON"]
}
*/