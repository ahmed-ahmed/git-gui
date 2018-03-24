import template from './repo-files.html';

class ReposListController{
    constructor(reposService, $stateParams, $state) {
        this.reposService = reposService
        this.userName = $stateParams.user;
    }

    getPath(repoName, folderName, file) {
        let path;

        if(file.size!=='-') {
            path = `/${this.userName}/${repoName}/blob/master/`
        } else {
            path = `/${this.userName}/${repoName}/tree/master/`
        }

        if(folderName) {
            if(!folderName.endsWith('/')) {
                folderName =  folderName + '/';
            }
            path = path +  folderName;
        }

        if(file.name) {
            path = path + file.name;
        }

        // console.log(path);
        return path;
        // return path.replace('///', '/').replace('//', '/');
        // return `/ahmed/{{$ctrl.repoName}}/blob/master/{{$ctrl.folderName}}/{{file.name}}`
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
        repoName: '<'
    },
    controller: ReposListController,
    template
};

angular.module('app')
    .component('repoFiles', component);
