var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function(req,res){
	res.render("landing");
});


const PORT = 3000 || process.env.PORT

app.listen(PORT, process.env.IP, function(){
	console.log("Server has begun!!");
})

