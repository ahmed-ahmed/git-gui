import template from './repos-list.html';

class ReposListController{
    constructor(reposService) {
        this.service = reposService;
        
        reposService.getRepos().then((res)=>{
            this.repos = res.data;
            console.log(this.repos);
        });
    }
}


let component = {
    bindings: {
        // userName: '@',
        // enableNavigationBar: '<'
    },
    template,
    controller: ReposListController
};

export default component;
