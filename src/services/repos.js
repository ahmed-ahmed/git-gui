'use strict';
console.log('docker service started');

var p = require('child_process');
var $q = require('q');
var exec = p.exec;
var spawn = p.spawn;

var fs = require('fs');
var reposPath = `/home/ubuntu/.gitviewer/.repos`
var blamePath = `/home/ubuntu/workspace/bash/better-blame.sh`

exports.getRepos = () => {
    var deferred = $q.defer();
    fs.readFile(reposPath, function(err, data) {
        if (err) throw err;
        let repos = [];
        data.toString().split("\n").forEach((line)=> {
            var item = line.split('\t');
            repos.push(new Repo(item[0], item[1]));
        })
        deferred.resolve(repos);
    });
    return deferred.promise;
}

// check if file exists
exports.getReadme = (path) => {
    var deferred = $q.defer();
    fs.readFile(path + `/README.md`, function(err, data) {
        if (err) throw err;
        // let repos = [];
        // data.toString().split("\n").forEach((line)=> {
        //     var item = line.split('\t');
        //     repos.push(new Repo(item[0], item[1]));
        // })
        deferred.resolve(data.toString());
    });
    return deferred.promise;
}


exports.getFiles = (repoPath) => {
    var deferred = $q.defer();
    var cmd = blamePath;
    console.log(cmd)

    exec(cmd, {cwd: repoPath}, (err, data, derr) => {
        
        console.log(err);
        console.log(data);
        console.log(derr);
        
        let files = [];
        let items = data.split('\n');
        
        items.forEach(row=>{
            files.push(new File(...row.split('|')));
        })
        deferred.resolve(files);
    });
    return deferred.promise;
}


class Repo{
    constructor(name,path) {
        this.name = name;
        this.path = path;
    }
}

class File{
    constructor(name,lastModifiedDate, changedBy, commitMessage) {
        console.log(lastModifiedDate);
        this.name = name;
        // this.path = path;
        this.lastModifiedDate = lastModifiedDate;
        this.changedBy = changedBy;
        this.commitMessage = commitMessage;
    }
}

// function x(a,b)
// { console.log(a + b) }

// x(...[1,2])
