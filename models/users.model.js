const mongoose = require("mongoose");
var db = require("../db");
const shortid = require("shortid");

let userSchema = new mongoose.Schema({
  _id: String,
  email: String,
  password: String,
  name: String,
  phone: String,
  avatar: String,
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
