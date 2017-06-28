import angular from 'angular';
import 'angular-ui-router';

var app = angular.module('app', ['ui.router'])


///////services 
import reposService from './components/repos-list/repos-list-service.js';
app.service('reposService', reposService);


////// components
import reposListComponent from './components/repos-list/repos-list.js';
import repoFilesComponent from './components/repo-files/repo-files.js';

app.component('reposList', reposListComponent);
app.component('repoFiles', repoFilesComponent);


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
                    component: 'repoFiles'
                }
            },
            resolve: {
                repoName: ($stateParams)=> {
                    return $stateParams.name;
                },
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
