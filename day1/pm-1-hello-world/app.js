// Node.js Built-in Modules
// https://www.w3schools.com/nodejs/ref_modules.asp
var http = require('http');

// Include Your Own Module
var dt = require('./myfirstmodule');

var url = require('url')

// create a server object
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('The date and time are currently: ' + dt.myDateTime() + "<br/>");

  // Read the Query String
  res.write(req.url + "<br/>")

  // Split the Query String
  // localhost:8080/?year=2017&month=July
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.write(txt + "<br/>")

//   res.end(); // close the connection
}).listen(8080);