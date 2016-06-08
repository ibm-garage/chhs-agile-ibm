(function(angular){
  'use strict';

angular.module('myApp', ['ngRoute', 'profileModule',
    'inboxModule', 'searchModule', 'facilitiesModule', 'ngMaterial', 'ngMessages'])

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
        });
  }])
  .run(['$rootScope', function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.$$route.title;
    });
  }]);
})(window.angular);
