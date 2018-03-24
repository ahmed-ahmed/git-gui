var express = require('express');
var controller = express.Router();
// var service = require('../services/repos.js');


controller.get('/', (req, res) => {
    res.json(
        [
            'master',
            'feature-1',
            'feature-2',
        ]
    );
});
// controller.post('/', (req, res) => {
//     console.log(req.body);
//     var name = req.body.name,
//         path = req.body.path;
//         service.addRepo(name,path)
//     res.json(req.body);
// });


// // /api/repos/${repoName}?path=`+encodeURI(folderName)
// controller.get('/:repo/tree/:branch/*', (req, res) => {
//     let {repo,branch} = req.params
//     service.getFiles(repo,branch, req.params[0]).then(data => {
//          res.json(data);
//     });
// });
// controller.get('/:repo/blob/:branch/*', (req, res) => {
//     let {repo,branch} = req.params
//     service.getFile(repo, branch, req.params[0]).then(data => {
//          res.json(data.toString());
//     });
// });



module.exports = controller;
