const mongoose = require("mongoose");

const SpecialSchema = mongoose.Schema({
  anime_id: {type: Number, unique: true},
  title: String,
  image_url: String,
  type: String,
  source: String,
  episodes:Number,
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

module.exports = mongoose.model("Special", SpecialSchema);


//SAMPLE FOR POSTMAN
/*
{
    "anime_id": "29893",
    "title": "Aria The Avvenire",
    "image_url": "https://myanimelist.cdn-dena.com/images/anime/10/74338.jpg",
    "source": "Manga",
    "episodes":3,
    "status": "Finished Airing",
    "airing": false,
    "aired":{"from": "2015-09-26", "to": "2015-09-26"},
    "duration": "21 min. per ep.",
    "rating": "G - All Ages",
    "score": 8.09,
    "scored_by": 4901,
    "rank": 443,
    "popularity": 3211,
    "related":{"Adaptation": [{"mal_id": 81, "type": "manga", "url": "https://myanimelist.net/manga/81/Aria", "title": "Aria"}], "Prequel": [{"mal_id": 3297, "type": "anime", "url": "https://myanimelist.net/anime/3297/Aria_The_Origination", "title": "Aria The Origination"}]},
    "producer": "Shochiku",
    "licensor": "Nozomi Entertainment",
    "studio": "TYO Animations",
    "genre": "Fantasy, Sci-Fi, Shounen, Slice of Life",
    "opening_theme":["#1: Undine (ã‚¦ãƒ³ãƒ‡ã‚£ãƒ¼ãƒ) by Yui Makino (ep 1)", "#2: Euphoria (ãƒ¦ãƒ¼ãƒ•ã‚©ãƒªã‚¢) by Yui Makino (ep 2)", "#3: Spirale (ã‚¹ãƒ”ãƒ©ãƒ¼ãƒ¬) by Yui Makino (ep 3)"],
    "ending_theme":["Piacere (ãƒ”ã‚¢ãƒã‚§ãƒ¼ãƒ¬) by Shiena Nishizawa"]
}
*/