import app from '../../modules.js';
import template from './repos-page.html';

class ReposPageController{
    constructor(reposService){
        this.reposService = reposService;
    }



    $onInit() {
        // this.branches = async this.reposService.getBranchs(this.repoName);
        this.reposService.getBranchs(this.repoName).then((res)=>{
            this.branches = res.data
        });
        this.reposService.getFile(this.repoName, 'readme.md').then((res)=>{
            this.readme = res.data
        });

    }
}

const component = {
    bindings: {
        repoName: '<'
    },
    controller: ReposPageController,
    template
};

app.component('reposPage', component);
