var express = require('express');

var app = express.createServer();

app.get('/a2plus', function (req, res){
  res.send('Hello world!!');
});

app.get('/a2plus/about', function (req, res){
  res.send("I'm Diljith Dinesh, creator of this app.");
});

app.listen(4000);
