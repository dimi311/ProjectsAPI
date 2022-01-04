var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listProjects', function (req, res) {
   fs.readFile( __dirname + "/" + "projects.json", 'utf8', function (err, data) {
      console.log( data );
      res.setHeader('Content-Type', 'application/json');
      res.end( data );
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})