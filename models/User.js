const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  location: String,
  preferences: [String],
  joined: Date,
  ratings: [{ type: Map, of: mongoose.SchemaTypes.Mixed }],
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
