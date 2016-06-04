(function(){
  'use strict';

  var module = angular.module('searchModule', []);

  module.controller('SearchController', ['$scope', '$location', function($scope, $location){
    $scope.data = "Search";
    
    $scope.searchZipCodes = function () {
      $location.path('/facilities');
    }
  }]);
})();
