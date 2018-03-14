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
app.use('/api/repos', reposController);
app.use(express.static('client'));


app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing