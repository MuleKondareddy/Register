const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("users", User);

module.exports = UserModel;
