const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const db = require("./models");

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

mongoose.connect('mongodb://localhost:27017/chihuahuaDB', { useNewUrlParser: true });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.post("/api/chihuahuas", (req, res) => {
  db.Chihuahua.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

app.get("/api/chihuahuas", (req, res) => {
  db.Chihuahua.find({})
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
