var express = require("express");
var http = require("http");

var db;

var app = express();

var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
if(!err) db = db;
})

app.get('/', function(req, res) {
  res.render('');
});


app.get("/listSuggestions",function(req,res){
	db.collection("suggestions").find().toArray(function(err,suggestion){
		if(err) return res.send()
if(suggestions && suggestions.length){
res.send(200,suggestions)
	}
})
})


app.post('/saveSuggestion', function(req, res){
    if(req.data && req.data.suggestion){
db.collection("suggestions").insert({suggestion:req.data.suggestion},function(err,resp){

	if(err) return res.send(406,err);

	if(resp){
res.send(200,"data added")
	}
})

    }

    res.setHeader('Content-Type', 'application/json');
 
    
 
    
    console.log('you posted your suggestion');
});

var mongo = require("mongo");


 
var port = process.env.PORT || 8000;
app.listen(3000, function () {
  console.log('Server is running. Point your browser to: http://localhost:3000');
});
