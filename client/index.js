import angular from 'angular';
import 'angular-ui-router';
import Showdown from 'showdown';
import app from './modules.js'
window.Showdown = Showdown;

///////services 
import './components/repos-list/repos-list-service.js';
////// components
import './components/repos-page/repos-page.js';
import './components/repos-list/repos-list.js';
import './components/repo-files/repo-files.js';
import './components/file-page/file-page.js';
import './components/code/code.js';
import './components/addRepo/add-repo.js';
import './components/side-navigation/side-navigation';
import './components/select2/select2';
import './components/code-viewer/code-viewer';
import './components/breadcrumb/breadcrumb';


app.config(function ($locationProvider, $compileProvider, $httpProvider, $stateProvider, hljsServiceProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;

    $stateProvider
        .state('home', {
            url: '/:user',
            onEnter: function () {
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
        .state('addExistingRepo', {
            url: '/repo/add',
            views: {
                content: {
                    component: 'addRepo'
                }
            }
        })
        .state('repo', {
            url: '/:user/:name',
            views: {
                "content": {
                    component: "reposPage"
                },
                "breadcrumb": {
                    component: 'breadcrumb'
                }
            },
            resolve: {
                repoName: ($stateParams) => {
                    return $stateParams.name;
                },
                userName: ($stateParams) => {
                    return $stateParams.user;
                }
            }
        })
        .state('folder', {
            url: '/:user/:name/tree/master/*path',
            onEnter: function () {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'repoFiles'
                },
                "breadcrumb": {
                    component: 'breadcrumb'
                }
            },
            resolve: {
                repoName: ($stateParams) => {
                    return $stateParams.name;
                },
                folderName: ($stateParams) => {
                    return $stateParams.path;
                },
                userName: ($stateParams) => {
                    return $stateParams.user;
                }
            }
        })
        .state('file', {
            url: '/:user/:name/blob/master/*path',
            onEnter: function () {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'filePage'
                },
                "breadcrumb": {
                    component: 'breadcrumb'
                }
            },
            resolve: {
                repoName: ($stateParams) => {
                    return $stateParams.name;
                },
                filePath: ($stateParams) => {
                    return $stateParams.path;
                }
            }
        })
        .state('xxx', {
            url: '/xxx',
            template: 'nononono'
        })


    hljsServiceProvider.setOptions({
        // replace tab with 2 spaces
        tabReplace: '  '
    });

});


app.run(function($trace, $transitions) {
    $trace.enable('TRANSITION');
    $transitions.onStart({ }, function(trans) {
        console.log(trans);
        // var SpinnerService = trans.injector().get('SpinnerService');
        // SpinnerService.transitionStart();
        // trans.promise.finally(SpinnerService.transitionEnd);
      });
    

  })

  