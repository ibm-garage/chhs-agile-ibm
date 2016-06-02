(function(){
  'use strict';

  var module = angular.module('profileModule', []);

  module.controller('ProfileController', ['$scope', function($scope){
    $scope.data = "Profile";

    $scope.profileData = {
      parent_home_address: "4567 Cedar Avenue, Chula Vista 91910",
      parent_home_phone: "626-514-1111",
      parent_work_number: "626-514-0000"
    };
    console.log('I am in Profile');
  }]);
})();
