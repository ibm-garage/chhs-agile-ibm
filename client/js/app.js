// (function(){
  'use strict';

  var module = angular.module('myApp', ['ngRoute', 'CertAppModule', 'profileModule',
    'inboxModule', 'searchModule', 'facilitiesModule', 'ngMaterial'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
          title: 'Profile',
          templateUrl: 'client/views/applications/profile.html',
          controller: 'ProfileController'
        })
        .when('/inbox', {
          title: 'Inbox',
          templateUrl: 'client/views/applications/inbox.html',
          controller: 'InboxController'
        })
        .when('/search', {
          title: 'Search',
          templateUrl: 'client/views/applications/search.html',
          controller: 'SearchController'
        })
        .when('/facilities', {
          title: 'Search',
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

  module.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  }]);
// })();
