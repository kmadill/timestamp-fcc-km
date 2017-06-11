var express = require("express");
var path = require("path");
var http = require("http");
var moment = require("moment");

var app = express();

app.get("/:parameter", function(req, res) {
  var parameter = req.params.parameter;

  if(moment(parameter, "X", true).isValid()) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      "unix": moment(parameter, "X", true).format('X'),
      "natural": moment(parameter, "X", true).format('LL')
    }));
  } else if(moment(parameter, "LL", true).isValid()) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      "unix": moment(parameter, "LL", true).format('X'),
      "natural": moment(parameter, "LL", true).format('LL')
    }));
  } else {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
      "unix": null,
      "natural": null
    }));
  }

  /*
  if (moment(parameter, "x").isValid()) {
    res.send("Got a unix date: " + parameter);
  } else if (moment(parameter, "LLL").isValid()) {
    res.send("Got a natural date: " + parameter);
  } else {
    res.send("Bad date: " + parameter);
  }
*/

});

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);
