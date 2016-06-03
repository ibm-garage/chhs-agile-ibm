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
    var editProfileTemplate =
    '<button ng-click="editProfile()">Edit</button>'+
      '<div ng-hide="editableValue">' +
      '<label><b>Parent Home Address (1st Line Address, 2nd Line Address, City, State, Zip)</b>: <input type="text" ng-model="viewAddress"/></label><br>'+
      '<label><b>Parent Home Phone (area code, phone number)</b>: <input type="text" ng-model="viewHomePhone"/></label><br>'+
      '<label><b>Cell or Work Phone (area code, phone number)</b>: <input type="text" ng-model="viewWorkPhone"/></label></div>'+
      '';
    return {
      restrict: "A",
      template: editProfileTemplate,
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
