(function(){
  'use strict';

  var module = angular.module('inboxModule', []);

  module.controller('InboxController', ['$scope', function($scope){

     $scope.inboxData = [
       {title: 'Welcome', from: 'From: Francis'},
       {title: 'New data you\'ll find useful', from: 'From: Francis'}
     ];

  }]);
})();