var express = require("express");
var path = require("path");
var http = require("http");
var moment = require("moment");

var app = express();

app.get("/:parameter", function(req, res) {
  var parameter = req.params.parameter;
  var toReturn = {};

  if(moment(parameter, "X", true).isValid()) {
    toReturn = {
      "unix": moment(parameter, "X", true).format('X'),
      "natural": moment(parameter, "X", true).format('LL')
    };
  } else if(moment(parameter, "LL", true).isValid()) {
    toReturn = {
      "unix": moment(parameter, "LL", true).format('X'),
      "natural": moment(parameter, "LL", true).format('LL')
    };
  } else {
    toReturn = {
      "unix": null,
      "natural": null
    };
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(toReturn));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
