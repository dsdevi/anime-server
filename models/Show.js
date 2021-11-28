const mongoose = require("mongoose");

const ShowSchema = mongoose.Schema({
  anime_id: {type: Number, unique: true},
  title: String,
  image_url: String,
  type: String,
  source: String,
  episodes: Number,
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
  premiered: String,
  broadcast: String,
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

module.exports = mongoose.model("Show", ShowSchema);

//SAMPLE FOR POSTMAN
/*
{
    "anime_id": "5114",
    "title": "Fullmetal Alchemist: Brotherhood",
    "image_url": "https://myanimelist.cdn-dena.com/images/anime/5/47421.jpg",
    "source": "Manga",
    "episodes": 64,
    "status": "Finished Airing",
    "airing": false,
    "aired":{"from": "2009-04-05", "to": "2010-07-04"},
    "duration": 24,
    "rating": "R - 17+ (violence & profanity)",
    "score": 9.25,
    "scored_by": 733592,
    "rank": 1,
    "popularity": 4,
    "premiered": "Spring 2009",
    "broadcast": "Sundays at 17:00 (JST)",
    "related":{"Adaptation": [{"mal_id": 25, "type": "manga", "url": "https://myanimelist.net/manga/25/Fullmetal_Alchemist", "title": "Fullmetal Alchemist"}], "Alternative version": [{"mal_id": 121, "type": "anime", "url": "https://myanimelist.net/anime/121/Fullmetal_Alchemist", "title": "Fullmetal Alchemist"}], "Side story": [{"mal_id": 6421, "type": "anime", "url": "https://myanimelist.net/anime/6421/Fullmetal_Alchemist__Brotherhood_Specials", "title": "Fullmetal Alchemist: Brotherhood Specials"}, {"mal_id": 9135, "type": "anime", "url": "https://myanimelist.net/anime/9135/Fullmetal_Alchemist__The_Sacred_Star_of_Milos", "title": "Fullmetal Alchemist: The Sacred Star of Milos"}], "Spin-off": [{"mal_id": 7902, "type": "anime", "url": "https://myanimelist.net/anime/7902/Fullmetal_Alchemist__Brotherhood_-_4-Koma_Theater", "title": "Fullmetal Alchemist: Brotherhood - 4-Koma Theater"}]},
    "producer": "Aniplex, Square Enix, Mainichi Broadcasting System, Studio Moriken",
    "licensor": "Funimation, Aniplex of America",
    "studio": "Bones",
    "genre": "Action, Military, Adventure, Comedy, Drama, Magic, Fantasy, Shounen",
    "opening_theme":["#1: again by YUI (eps 1-14)", "#2: Hologram (ãƒ›ãƒ­ã‚°ãƒ©ãƒ ) by NICO Touches the Walls (eps 15-26)", "#3: Golden Time Lover (ã‚´ãƒ¼ãƒ«ãƒ‡ãƒ³ã‚¿ã‚¤ãƒ ãƒ©ãƒãƒ¼) by Sukima Switch (eps 27-38)", "#4: Period by Chemistry (eps 39-50)", "#5: Rain (ãƒ¬ã‚¤ãƒ³) by SID (eps 51-62)"],
    "ending_theme":["#1: Uso (å˜˜) by SID (eps 1-14)", "#2: LET IT OUT by Miho Fukuhara (eps 15-26)", "#3: Tsunaida Te (ã¤ãªã„ã æ‰‹) by Lil&#039;B (eps 27-38)", "#4: Shunkan Sentimental (çž¬é–“ã‚»ãƒ³ãƒãƒ¡ãƒ³ã‚¿ãƒ«) by SCANDAL (eps 39-50)", "#5: RAY OF LIGHT by Nakagawa Shouko (eps 51-62)", "#6: Rain (ãƒ¬ã‚¤ãƒ³) by SID (ep 63)", "#7: Hologram (ãƒ›ãƒ­ã‚°ãƒ©ãƒ ) by NICO Touches the Walls (ep 64)"]
}
*/