var express = require("express");
var http = require("http");

var app = express();


app.get('/app1', function (req, res) {
  res.send('Hello World!')
})

app.get('/app2', function (req, res) {
  res.send('Hello World again!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})