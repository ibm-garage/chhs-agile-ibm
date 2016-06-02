// (function(){
  'use strict';

  angular.module('myApp', ['ngRoute', 'CertAppModule', 'ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/certificationSelection', {
            templateUrl: 'client/views/applications/certificationSelection.html',
            controller: 'NewApplicationController'
        })
        .when('/application/new', {
            templateUrl: 'client/views/applications/newApplication.html',
            controller: 'NewApplicationController'
        })
  }]);
// })();
