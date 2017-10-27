var express = require("express");
var http = require("http");

var app = express();





app
  .use('/app1', require('./app1/index').app)
  .use('/app2', require('./app2/index').app)
  .listen(8080);



  // or you can directly use pm2 and use pm2 start index1.js & pm2 start index2.js

