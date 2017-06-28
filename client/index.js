import angular from 'angular';
import 'angular-ui-router';
// import 'angularjs-scroll-glue';
var app = angular.module('app', ['ui.router'])


///////services 
import reposService from './components/repos-list/repos-list-service.js';
// import imageComponent from './components/images/images.js';
// import imagesService from './components/images/imagesService.js';

import reposListComponent from './components/repos-list/repos-list.js';

// import containersComponent from './components/containers/containers.js';
// import containerComponent from './components/container/container.js';
// import containersService from './components/containers/containersService.js';


app.service('reposService', reposService);
// app.service('containersService', containersService);

// app.component('dImages', imageComponent);
// app.component('dContainers', containersComponent);
// app.component('dContainer', containerComponent);
app.component('reposList', reposListComponent);
app.config(function($locationProvider, $compileProvider, $httpProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;

    $stateProvider
        .state('home', {
            url: '/',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'reposList'
                }


            }
        })
        .state('repo', {
            url: '/repo/:name',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'dContainer'
                }
            },
            resolve: {
                id: function($stateParams) {
                    return $stateParams.id
                }
            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })
});
