const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  anime_id: Number,
  title: String,
  image_url: String,
  type: String,
  source: String,
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

module.exports = mongoose.model("Movie", MovieSchema);


//SAMPLE FOR POSTMAN
/*
{
    "anime_id": "32281",
    "title": "Kimi no Na wa.",
    "image_url": "https://myanimelist.cdn-dena.com/images/anime/5/87048.jpg",
    "source": "Original",
    "status": "Finished Airing",
    "airing": false,
    "aired":{"from": "2016-08-26", "to": "2016-08-26"},
    "duration": "1 hr. 46 min.",
    "rating": "PG-13 - Teens 13 or older",
    "score": 9.19,
    "scored_by": 471398,
    "rank": 2,
    "popularity": 33,
    "related":{"Adaptation": [{"mal_id": 99314, "type": "manga", "url": "https://myanimelist.net/manga/99314/Kimi_no_Na_wa", "title": "Kimi no Na wa."}, {"mal_id": 111747, "type": "manga", "url": "https://myanimelist.net/manga/111747/Kimi_no_Na_wa", "title": "Kimi no Na wa."}], "Other": [{"mal_id": 33902, "type": "anime", "url": "https://myanimelist.net/anime/33902/Suntory_Minami_Alps_no_Tennen_Mizu", "title": "Suntory Minami Alps no Tennen Mizu"}]},
    "producer": "Kadokawa Shoten, Toho, Sound Team Don Juan, Lawson HMV Entertainment, Amuse, East Japan Marketing &amp; Communications",
    "licensor": "Funimation, NYAV Post",
    "studio": "CoMix Wave Films",
    "genre": "Supernatural, Drama, Romance, School",
    "opening_theme":["Yume Tourou (å¤¢ç¯ç± ) by RADWIMPS"],
    "ending_theme":["Nandemonaiya (ãªã‚“ã§ã‚‚ãªã„ã‚„) by RADWIMPS"]
}
*/