'use strict';
var File = require('../models/file');
var Repo = require('../models/repo');

var path = require('path');
const execa = require('execa');


const fs = require('fs-extra')
var packagePath = process.cwd();

var reposPath = getUserHome() + '/.git-gui/repos'; //`${packagePath}/settings/repos`
var blamePath = `${packagePath}/bash/better-blame.sh`

exports.addRepo = (name, path)=> {

    var homePath = getUserHome();
    var reposDir = `${homePath}/.git-gui`
    var fileName = reposDir + `/repos`;


    if (!fs.existsSync(reposDir)) {
    mkdirp(reposDir, function (err) {
        if (err) console.error(err)
        else console.log('created setting directory')
    });

    }

    fs.appendFile(fileName, `${name}\t${path}\n`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    return true;
}

exports.getRepos = ()=>{
    var repos = getRepos();
    var vals = Object.keys(repos).map(function(key) {
        return repos[key];
    });
     return vals;
}

function getRepos() {
    let data = fs.readFileSync(reposPath);
    let repos = [];
    data.toString().split("\n").forEach((line)=> {
        var item = line.split('\t');
        repos.push(new Repo(item[0], item[1]));
    })
    console.log(repos);
    return repos.reduce(function(result, item) {
        result[item.name] = item; //a, b, c
        return result;
    }, {});

}

exports.getFile = (repo, branch, path) => {
    var repos = getRepos();
    var repoPath = repos[repo].path;
    var filePath = repoPath + '/' + path;
    return fs.readFile(filePath)
}

//todo: branchs
exports.getFiles = (repo, branch, path) => {
    var repos = getRepos();
    var repoPath = repos[repo].path;
    var workingDir = repoPath + '/' + path;
    var cmd = blamePath;
    return execa.shell(cmd, {cwd: workingDir},).then(results => {
        let data = results.stdout
        let files = [];
        let folders = [];
        //todo: remove empty item 
        let items = data.split('\n');
        items.forEach(row=>{
            var item = new File(...row.split('|'))
            if(item.size === '-') { //folder
                folders.push(item);
            }else {
                files.push(item);
            }
        })
        return folders.concat(files);
    })
}

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

