const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  showsCompleted: Number,
  gender: String,
  location: String,
  birthDate: Date,
  joined: Date,
  meanScore: Number,
  episodesWatched: Number,
});

module.exports = mongoose.model("User", UserSchema);

//SAMPLE FOR POSTMAN
/*
{
    "username":"devi",
    "password":"pass123",
    "location":"Sri Lanka",
    "preferences":["Hentai", "Ecchi"]
}
*/
