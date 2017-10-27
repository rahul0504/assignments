var express = require("express");
var http = require("http");

var app = express();

app
  .use('/app1', function(err,res){
  	res.send(200,"hello World");
  	});
  app.use('/app2', function(err,res){
  	res.send(200,"hello World Again")
  });
    app.listen(8080);