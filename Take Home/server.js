var fs = require('fs');
var express = require("express");
global.jQuery = require('jquery');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');

var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;
var db = require('./node_modules/mongoskin').db('mongodb://user:password@127.0.0.1:27017/TakeHome')

app.get("/", function (req, res) {
      res.redirect("/index.html");
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);