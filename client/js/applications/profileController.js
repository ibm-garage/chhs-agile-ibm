(function(){
  'use strict';

  var module = angular.module('profileModule', ['ngStorage']);

  module.controller('ProfileController', ['$scope', '$localStorage', function($scope, $localStorage){
    $scope.data = "Profile";
    $scope.storage = $localStorage;
    $scope.noneditable = true;
    $scope.editableFields = true;
    $scope.storage.parent_home_address;

    var jsonData = JSON.stringify($scope.storage);
    if(jsonData.indexOf('{}') >=0) {
      $scope.profileData = {
        parent_home_address: "4567 Cedar Avenue, Chula Vista 91910",
        parent_home_phone: "626-514-1111",
        parent_work_number: "626-514-0000"
      };
      $scope.storage.parent_home_address = $scope.profileData.parent_home_address;
      $scope.storage.parent_home_phone = $scope.profileData.parent_home_phone;
      $scope.storage.parent_work_number = $scope.profileData.parent_work_number;
    } else {
      console.log('Storage Exists');
    }
    $scope.parentHomeAddress = $scope.storage.parent_home_address;
    $scope.parentHomePhone = $scope.storage.parent_home_phone;
  }]);

  module.directive('editMyProfile', function () {
    return {
      restrict: "A",
      templateUrl: 'client/views/applications/edit.html',
      link: function(scope, element, attrs, localStorage) {
        scope.editableValue = true;
        scope.viewAddress = scope.storage.parent_home_address;
        scope.viewHomePhone = scope.storage.parent_home_phone;
        scope.viewWorkPhone = scope.storage.parent_work_number;

        scope.editProfile = function(){
          scope.storage.parent_home_address = scope.viewAddress;
          scope.storage.parent_home_phone = scope.viewHomePhone;
          scope.storage.parent_work_number = scope.viewWorkPhone;

          if(scope.editableValue == true) {
            scope.editableValue = false;
            scope.noneditable = false;
            scope.editableFields = false;
          } else {
            scope.editableValue = true;
            scope.noneditable = true;
            scope.editableFields = true;
          }
        };
      }
    };
  });
})();
