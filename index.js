const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.listen(3000);
app.use(express.static("assets"));
app.use(bodyParser.json());

app.get("/messages", function(req, res, next) {
  res.status(200).json({ messages: messages });
});

const messages = ["hello", "call me", "see you soon"];

app.post("/messages", function(req, res, next) {
  messages.push({ message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});
