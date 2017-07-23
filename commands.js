var path = require('path');
// var chalk       = require('chalk');
// var mkdirp = require('mkdirp');
var argv = require('minimist')(process.argv);
var fs = require('fs')



var homePath = getUserHome();
var reposDir = `${homePath}/.git-gui`

ensureDirectoryExistence(reposDir);
var fileName = reposDir + `/repos`;

console.log(argv);
let reposName = argv._[2] || argv.name || __dirname

console.log(reposName);
// if (!fs.existsSync(fileName)) {
//   fs.writeFileSync(fileName);
// }

fs.appendFile(fileName, `${reposName}\t${__dirname}\n`, function (err) {
  if (err) throw err;
  console.log('Saved!');
});


function ensureDirectoryExistence(filePath) {
  var dirname = path.dirname(filePath);
  console.log(filePath)
  if (fs.existsSync(dirname)) {
    return true;
  }
  return ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}


function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

