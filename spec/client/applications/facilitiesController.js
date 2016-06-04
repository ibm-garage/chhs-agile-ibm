'use strict';

describe('Facilities Module', function () {
  var $controller;
  var $scope;
  var element;
  beforeEach(module('facilitiesModule'));

  beforeEach(function() {
    $scope = {};

    inject(function ($controller, $rootScope, $compile) {
      var $controller = $controller('FacilitiesController', {$scope: $scope});
    });
  });

  describe('Facilities Controller', function () {

    it('has a Facilities controller', function () {
      expect($scope.data).toEqual('Facilities');
    });
  });
});