(function(){
  'use strict';

  var module = angular.module('inboxModule', []);

  module.controller('InboxController', ['$scope', function($scope){
    $scope.data = "Inbox";
    console.log('I am in Inbox');
  }]);
})();
