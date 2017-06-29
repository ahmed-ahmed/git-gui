'use strict';
import angular from 'angular';
import $q from 'q'


class ReposService {
    constructor($http) {
        this.$http = $http;
    }
    getRepos() {
        return this.$http.get('/api/repos');
    }
    
    getFiles(repoName) {
        var data = `[{"name":".babelrc","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"36"},{"name":".gitignore","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"31"},{"name":"AC","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"README.md","lastModifiedDate":"24 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"add project description to the gui","size":"93"},{"name":"bash","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"client","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"-"},{"name":"docker","lastModifiedDate":"26 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"adding repos","size":"-"},{"name":"index.js","lastModifiedDate":"26 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"adding repos","size":"802"},{"name":"nodemon.json","lastModifiedDate":"28 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"Empty project","size":"63"},{"name":"package-lock.json","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"362347"},{"name":"package.json","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"792"},{"name":"src","lastModifiedDate":"8 minutes ago","changedBy":"Ahmed Ahmed","commitMessage":"retrive the file size","size":"-"},{"name":"webpack.config.js","lastModifiedDate":"22 hours ago","changedBy":"Ahmed Ahmed","commitMessage":"read me working","size":"577"},{"name":""}]`
        var deferred = $q.defer();
        deferred.resolve({data: data});
        return deferred.promise;
        // return this.$http.get(`/api/repos/${repoName}/files`);
    }
    
    getReadMe(repoName) {
        var data = `"# git gui\n\nA`
        var deferred = $q.defer();
        deferred.resolve({data: data});
        return deferred.promise;
        // var data = `"# git gui\n\nA graphical user interface to manage git repos\n\n```\nnpm start \nwebpack --watch\n```"
        // return this.$http.get(`/api/repos/${repoName}/readme`);
    }

//     stopContainer(containerId) {
//     	return this.$http.put('/api/containers', {
//     		containerId: containerId
//     	});
//     }

//     deleteContainer(containerId) {
// 		return this.$http({
//             url: `/api/containers/${containerId}`,
//             method: 'DELETE'
//         })
//     }
}

export default ReposService;


