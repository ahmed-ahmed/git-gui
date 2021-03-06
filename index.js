#!/usr/bin/env node
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);  
let port = 3000;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
var reposController = require('./src/routes/repos.js');
var branchsController = require('./src/routes/branchs.js');
app.use('/api/repos', reposController);
app.use('/api/branchs', branchsController);
app.use(express.static('client'));
app.use(express.static('client/theme'));


app.get('/theme/*', function(req, res){
  console.log(req);
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing