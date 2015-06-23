var express = require('express');

var app = express.createServer();

app.get('/', function (req, res){
  res.send('Hello world!!');
});

app.get('/about', function (req, res){
  res.send("I'm Diljith Dinesh, creator of this app.");
});

app.listen(3000);