'use strict';

describe('Profile Module', function () {
  var $controller;
  var $scope;

  beforeEach(module('profileModule'));

  beforeEach(function() {
    $scope = {};

    inject(function ($controller) {
      var $controller = $controller('ProfileController', {$scope: $scope});
    })
  });
  
  describe('Profile Controller', function () {
    it('has a profile controller', function () {
      expect($scope.data).toEqual('Profile');
    });

    it('has parent address', function () {
      expect($scope.profileData.parent_home_address).toEqual('4567 Cedar Avenue, Chula Vista 91910');
    });
  });
});