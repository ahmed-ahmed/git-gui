import template from './repo-files.html';

class ReposListController{
    constructor(reposService) {
        this.service = reposService;
        this.repoName = `githubclone`;
        console.log(this.repoName);
        
        reposService.getFiles(this.repoName).then((res)=>{
            this.files = res.data;
            console.log(this.files);
        });
        
        reposService.getReadMe(this.repoName).then((res)=>{
            this.readme = res.data
        });
    }
}


let component = {
    bindings: {
        // userName: '@',
        repoName: '<'
    },
    template,
    controller: ReposListController
};

export default component;