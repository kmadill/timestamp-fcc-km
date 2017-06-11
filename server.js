var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

app.get("/:parameter", function(req, res) {
  res.send("Hello, " + req.params.parameter)
});

http.createServer(app).listen(1337);
