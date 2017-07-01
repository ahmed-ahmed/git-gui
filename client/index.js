import angular from 'angular';
import '@uirouter/angularjs';
import Showdown from 'showdown';
import app from './modules.js'
window.Showdown  = Showdown ;

///////services 
import './components/repos-list/repos-list-service.js';
////// components
import './components/repos-page/repos-page.js';
import './components/repos-list/repos-list.js';
import './components/repo-files/repo-files.js';




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
            views: {
                "content": {
                    component: "reposPage"
                }
            },
            resolve: {
                repoName: ($stateParams)=> {
                    return $stateParams.name;
                }
            }
        })

        .state('folder', {
            url: '/repo/:name/tree/master/*path',
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
                folderName: ($stateParams)=> {
                    return $stateParams.path;
                }
            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })
});


