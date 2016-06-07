(function(){
  'use strict';

  var module = angular.module('inboxModule', []);

  module.controller('InboxController', ['$scope', '$mdDialog', function($scope, $mdDialog){

     $scope.inboxData = [
       {title: 'Welcome', from: 'From: Francis'},
       {title: 'New data you\'ll find useful', from: 'From: Francis'}
     ];

     $scope.sent_message = [
       {title: 'Can you help?', body:
       'Hi Francis, I am struggling to balance everything right now and need assistance.' + '\n' +'I am planning to search through the FFAs to see if there is one in my neighborhood that is appropriate for Molly.'}
     ];

     $scope.showMessageDialog = function(ev) {
       var confirm = $mdDialog.confirm()
           .title($scope.sent_message[0].title)
           .textContent($scope.sent_message[0].body)
           .ariaLabel('Message saying Rachel asks for help')
           .targetEvent(ev)
           .ok('SEND')
           .cancel('CANCEL');

           $mdDialog.show(confirm).then(function() {
            $scope.status = 'You decided to get rid of your debt.';
            $scope.abc = confirm._options.title;
          }, function() {
            $scope.status = 'You decided to keep your debt.';
          });
     }


  }]);
})();
