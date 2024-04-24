const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const User = require("./Module/tables");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/oginapp");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("Password is InCorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/register", (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Port running at 3000");
});
