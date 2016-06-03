(function(){
  'use strict';

  var module = angular.module('searchModule', []);

  module.controller('SearchController', ['$scope', function($scope){
    $scope.data = "Search";
  }]);
})();
