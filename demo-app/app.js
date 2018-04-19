(function() {
'use strict';
angular.module('demoApp', [
    'ui.router'
])
.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
});

}) ();