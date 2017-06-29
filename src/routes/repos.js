var express = require('express');
var controller = express.Router();
var service = require('../services/repos.js');

var repos = {};
service.getRepos().then(data => {
    repos = data.reduce(function(result, item) {
        result[item.name] = item; //a, b, c
        return result;
    }, {});
    // repos = data;
});


controller.get('/', (req, res) => {
    var vals = Object.keys(repos).map(function(key) {
        return repos[key];
    });

    res.json(vals);
});


controller.get('/:repo/files', (req, res) => {
    var path = repos[req.params.repo].path;
    
    service.getFiles(path).then(data => {
        res.json(data);
    });
});

controller.get('/:repo/readme', (req, res) => {
    var path = repos[req.params.repo].path;
    
    
    service.getReadme(path).then(data => {
        res.json(data);
    });
});



module.exports = controller;
