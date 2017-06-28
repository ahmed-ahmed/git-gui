'use strict';

import angular from 'angular';

class ReposService {
    constructor($http) {
        this.$http = $http;
    }
    getRepos() {
        return this.$http.get('/api/repos');
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


