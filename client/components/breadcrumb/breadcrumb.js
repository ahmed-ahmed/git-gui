import app from '../../modules.js';
import template from './breadcrumb.html';

class breadcrumbController{
    constructor($stateParams, $state) {
        this.$stateParams = $stateParams;
        this.$state = $state;
    }

    $onInit() {
        this.user = this.$stateParams.user;
        this.repoName = this.$stateParams.name;
        this.pathList = [];
        if(this.$stateParams.path) {
            let currentPath = `/${this.user}/${this.repoName}/tree/master/`;
            // let lastPath = `/${this.user}/${this.repoName}/tree/master`;
            
            // if(this.$state.current.name === 'file') {
            //     lastPath= `/${this.user}/${this.repoName}/blob/master/`;
            // }
            
            // let i =0;

            let paths = this.$stateParams.path.split("/").filter(item => item);
            paths.forEach(element => {
                // if( i === paths.length - 1) {
                //     isLast = true;
                // }
                currentPath = currentPath + element + '/'
                this.pathList.push({
                    name: element, 
                    url: currentPath
                })
            });

            // this.pathList = this.$stateParams.path.split("/")
        }
    }

    // constructor(reposService, $timeout){
    //     this.reposService = reposService;
    //     this.$timeout = $timeout;
    // }

    // $onInit() {       
    //     console.log(this.repoName + "|" + this.filePath)
    //     this.reposService.getFile(this.repoName, this.filePath).then((res)=>{
    //         this.file = res.data
    //     });

    //     // this.$timeout(function () { 
    //     //     PR.prettyPrint(); 
    //     // }, 1000);

    // }

    // $postLink() {
    //     PR.prettyPrint();
    // }
}

const component = {
    bindings: {
        repoName: '<',
        filePath: '<'
    },
    controller: breadcrumbController,
    template
};

app.component('breadcrumb', component);
