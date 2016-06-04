// (function(){
  'use strict';

  angular.module('myApp', ['ngRoute', 'CertAppModule', 'profileModule',
    'inboxModule', 'searchModule', 'facilitiesModule', 'ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'client/views/applications/profile.html',
          controller: 'ProfileController'
        })
        .when('/inbox', {
          templateUrl: 'client/views/applications/inbox.html',
          controller: 'InboxController'
        })
        .when('/search', {
          templateUrl: 'client/views/applications/search.html',
          controller: 'SearchController'
        })
        .when('/facilities', {
          templateUrl: 'client/views/applications/facilities.html',
          controller: 'FacilitiesController'
        })
        .when('/certificationSelection', {
            templateUrl: 'client/views/applications/certificationSelection.html',
            controller: 'NewApplicationController'
        })
        .when('/application/new', {
            templateUrl: 'client/views/applications/newApplication.html',
            controller: 'NewApplicationController'
        });

  }]);
// })();
