import template from './repo-files.html';

class ReposListController{
    constructor(reposService) {
        this.reposService = reposService
    }

    getPath(repoName, folderName, file) {
        let path;

        if(file.size!=='-') {
            path = `/repo/${repoName}/blob/master/`
        } else {
            path = `/repo/${repoName}/tree/master/`
        }

        if(folderName) {
            path = path + folderName + '/';
        }

        if(file.name) {
            path = path + file.name;
        }

        return path;
        // return `/repo/{{$ctrl.repoName}}/blob/master/{{$ctrl.folderName}}/{{file.name}}`
    }

    $onInit() {
        this.reposService.getFiles(this.repoName, this.folderName).then((res)=>{
            this.files = res.data;
        });
    }

}

const component = {
    bindings: {
        folderName: '<',
        repoName: '<',
    },
    controller: ReposListController,
    template
};

angular.module('app')
    .component('repoFiles', component);
