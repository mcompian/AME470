var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

<<<<<<< HEAD
var objArray = [
	{
	id: 0,
	course: "AME470",
	startDate: "Jan 11, 2016",
	endDate: "May 4, 2016"
	},
	{
	id: 1,
	course: "AME470",
	startDate: "Jan 11, 2016",
	endDate: "May 4, 2016"
	},
	{
	id: 2,
	course: "AME470",
	startDate: "Jan 11, 2016",
	endDate: "May 4, 2016"
	}
];
var exObj = {
	course: "AME470",
	startDate: "Jan 11, 2016",
	endDate: "May 4, 2016"
};

app.get("/", function (req, res) {
      res.redirect("/index.html");
});
/*
=======
app.get("/", function (req, res) {
      res.redirect("/index.html");
});

>>>>>>> a688d2b8b9bf53f56403ec10a1806625d83c9d34
app.get("/eval", function (req, res) {
    console.log(req.query);
    var userInput = decodeURIComponent(req.query.code);
    var result  = eval(userInput);
    // calculate res here
    //
     res.send(result.toString()); // send response body
});
<<<<<<< HEAD
*/

app.get("/getJSObj", function(req, res) {
	res.send(JSON.stringify(exObj))
});

app.get("/getJSObjFromArray", function(req, res) {
	var index = (req.query.id)
	//for(var i = 0; 0 < objArray.length; i++) {
	//	if(objArray[i].id == 0) {
	//		res.send(JSON.stringify(objArray[i]))
	//	}
	//	else {}
	res.send(JSON.stringify(objArray[index]))
	}
});

=======
>>>>>>> a688d2b8b9bf53f56403ec10a1806625d83c9d34

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
