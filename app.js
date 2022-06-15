 // jshint esversion:6

 const express = require("express");
 const bodyParser = require("body-parser");
 const { redirect } = require("express/lib/response");

 const app = express();

 app.set("view engine", "ejs");
 app.use(bodyParser.urlencoded({extended : true}));
 app.use(express.static("public"));

 var tasks = [];
 var work =[];

 app.get('/', function(req, res){
    var today = new Date();
    
    var option= {
        weekday : 'long',
        day : 'numeric',
        month : 'long'
    }

    var day = today.toLocaleDateString("en-US", option);
    res.render("list", {title : day, newitems : tasks});})

 app.post('/', function(req , res){

    var item = req.body.newItem;
    if (req.body.list === "My"){
        work.push(item);
        res.redirect("/work");
    }else{
        tasks.push(item);
        res.redirect("/");
    }
    console.log(req.body);
    
 })

 app.get('/work', function(req, res){
     res.render("list", {title : "My works", newitems : work});
 })
app.listen(3000, function(){
     console.log("server is running at 3000 porrt.");
 })