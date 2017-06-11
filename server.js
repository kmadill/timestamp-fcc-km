var express = require("express");
var path = require("path");
var http = require("http");

var app = express();

app.get("/:parameter", function(req, res) {
  res.send("Hello, " + req.params.parameter)
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
