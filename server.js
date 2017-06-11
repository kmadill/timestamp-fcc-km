var express = require("express");
var path = require("path");

var app = express();

app.get("/:parameter", function(req, res) {
  res.send("Hello, " + req.params.parameter)
});
