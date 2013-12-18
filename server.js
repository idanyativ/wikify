var express = require('express')
var http = require('http');
//var html = require('./getHtml');
var user = require('./users');

var app = express();//.createServer();
app.configure(function () {
    app.use(express.logger('dev'));    
    app.use(express.bodyParser());//it will parse json request bodies (as well as others), and place the result in req.body:
});

// set the default page
app.use('/public',express.static(__dirname+'/public'));
app.use('/',express.static(__dirname+'/public'));
app.use('/',express.static(__dirname+'/'));


console.log(user);
//app.get('/getHtml',html.head);
//res.set('Content-Type', 'text/plain');


app.get('/', function(req, res){
  res.send('hello world');
});

//response.setHeader("Access-Control-Allow-Origin:", "http://localhost:3000");


app.listen(3000);
