// $(window).load(function () { //all function inside this runs when the window is full loaded
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/", function( req , res ){
	res.sendFile(__dirname+"/views/main.html");
});//load home signUp page







const PORT = 3000 || process.env.PORT

app.listen(PORT, process.env.IP, function(){
	console.log("Server has begun!!");
})
// });

