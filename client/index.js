import angular from 'angular';
import 'angular-ui-router';
import 'angularjs-scroll-glue';
import imageComponent from './components/images/images.js';
import imagesService from './components/images/imagesService.js';

import containersComponent from './components/containers/containers.js';
import containerComponent from './components/container/container.js';
import containersService from './components/containers/containersService.js';

var app = angular.module('app', ['ui.router', 'luegg.directives'])
app.service('imagesService', imagesService);
app.service('containersService', containersService);

app.component('dImages', imageComponent);
app.component('dContainers', containersComponent);
app.component('dContainer', containerComponent);
app.config(function($locationProvider, $compileProvider, $httpProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled('<dev-only-angular-debug-info>');

    $httpProvider.defaults.cache = false;

    $stateProvider
        .state('images', {
            url: '/images',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'dImages'
                }


            }
        })
        .state('containers', {
            url: '/',
            onEnter: function() {
            },
            views: {
                'header': {
                    template: 'header'
                },
                'content': {
                    component: 'dContainers'
                }


            }
        })
        .state('container', {
            url: '/containers/:id',
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
