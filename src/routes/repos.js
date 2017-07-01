var express = require('express');
var controller = express.Router();
var service = require('../services/repos.js');

// var repos = {};
// service.getRepos().then(data => {
//     repos = data.reduce(function(result, item) {
//         result[item.name] = item; //a, b, c
//         return result;
//     }, {});
//     // repos = data;
// });


controller.get('/', (req, res) => {
    res.json(service.getRepos());
});

// /api/repos/${repoName}?path=`+encodeURI(folderName)
controller.get('/:repo/tree/:branch/*', (req, res) => {
    let {repo,branch} = req.params
    service.getFiles(repo,branch, req.params[0]).then(data => {
         res.json(data);
    });
});
controller.get('/:repo/blob/:branch/*', (req, res) => {
    res.json(req.params)
    // res.json(req.params.path);
});

// controller.get('/:repo/:folder/files', (req, res) => {
//     var path = repos[req.params.repo].path;
//     var folder = req.params.folder
//     if(folder) {
//         path =  path + '/' + folder;
//     }

//     console.log(path);

//     service.getFiles(path).then(data => {
//         res.json(data);
//     });
// });

// controller.get('/:repo/readme', (req, res) => {
//     var path = repos[req.params.repo].path;
    
    
//     service.getReadme(path).then(data => {
//         res.json(data);
//     });
// });



module.exports = controller;
