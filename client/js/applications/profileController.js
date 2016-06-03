(function(){
  'use strict';

  var module = angular.module('profileModule', ['ngStorage']);

  module.controller('ProfileController', ['$scope', '$localStorage', function($scope, $localStorage){
    $scope.data = "Profile";
    $scope.storage = $localStorage;
    $scope.noneditable = true;
    
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
  }]);

  module.directive('editMyProfile', function () {
    var editProfileTemplate =
    '<button ng-show="showEditBtn" ng-click="editProfile()">Edit</button>'+
      '<div ng-hide="editableValue">' +
      '<input type="text" ng-model="viewAddress"/><br>'+
      '<input type="text" ng-model="viewHomePhone"/><br>'+
      '<input type="text" ng-model="viewWorkPhone"/></div>'+
      '';
    return {
      restrict: "A",
      template: editProfileTemplate,
      link: function(scope, element, attrs, localStorage) {
        scope.editableValue = true;
        scope.showEditBtn = true;

        scope.viewAddress = scope.storage.parent_home_address;
        scope.viewHomePhone = scope.storage.parent_home_phone;
        scope.viewWorkPhone = scope.storage.parent_work_number;

        scope.editProfile = function(){
          if(scope.editableValue == true) {
            scope.storage.parent_home_address = scope.viewAddress;
            scope.storage.parent_home_phone = scope.viewHomePhone;
            scope.storage.parent_work_number = scope.viewWorkPhone;
            scope.editableValue = false;
            scope.noneditable = false;
          } else {
            scope.editableValue = true;
            scope.storage.parent_home_address = scope.viewAddress;
            scope.storage.parent_home_phone = scope.viewHomePhone;
            scope.storage.parent_work_number = scope.viewWorkPhone;
            scope.noneditable = true;
          }
        };
      }
    };
  });



})();
