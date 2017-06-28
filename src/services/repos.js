'use strict';
console.log('docker service started');

var p = require('child_process');
var $q = require('q');
var exec = p.exec;
var spawn = p.spawn;

var fs = require('fs');
var reposPath = `/home/ubuntu/.gitviewer/.repos`

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

exports.getFiles = (repoPath) => {
    var deferred = $q.defer();
    fs.readdir(repoPath, function(err, data) {
        // if (err) throw err;
        // let repos = [];
        // data.toString().split("\n").forEach((line)=> {
        //     var item = line.split('\t');
        //     repos.push(new Repo(item[0], item[1]));
        // })
         deferred.resolve(data);
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
    constructor(name,path) {
        this.name = name;
        this.path = path;
    }
}