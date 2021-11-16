const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  username: String,
  password: String,
  location: String,
  joined: Date,
});

module.exports = mongoose.model("Admin", AdminSchema);

//SAMPLE FOR POSTMAN
/*
{
    "username":"deviAdmin",
    "password":"pass123",
    "location":"Sri Lanka"
}
*/