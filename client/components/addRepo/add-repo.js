import app from '../../modules.js';
import template from './add-repo.html';

class AddRepoController{
    constructor(reposService){
        this.reposService = reposService;
    }

    $onInit() {
        this.addRepo = ()=> {
            this.reposService.addRepo(this.name, this.path).then((res)=>{
                this.readme = res.data
            });
        }
    }
}

const component = {
    bindings: {
        // repoName: '<'
    },
    controller: AddRepoController,
    template
};

app.component('addRepo', component);
