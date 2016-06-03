'use strict';

describe('Profile Module', function () {
  var $controller;
  var $scope;
  var element;
  var name = 'Homer';

  beforeEach(module('profileModule'));
  beforeEach(module('ngStorage'));
  beforeEach(function() {
    $scope = {};

    inject(function ($controller, $rootScope, $compile) {
      var $controller = $controller('ProfileController', {$scope: $scope});
      // var scope = $rootScope.$new();
      // scope.name = name;
      // $compile(element)(scope);
      // scope.$digest();
    });
  });
  
  describe('Profile Controller', function () {

    beforeEach(function(){
      element = angular.element('<div edit-my-profile/>');

      inject(function ($controller, $rootScope, $compile) {
        var scope = $rootScope.$new();
        scope.name = name;
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('has a profile controller', function () {
      expect($scope.data).toEqual('Profile');
    });

    xit('has parent address', function () {
      expect($scope.profileData).toBeDefined();
    });

    xit('has a name', function() {
      expect(element.text()).toBe('Hello Homer');
    });
  });

  describe('Edit Profile', function () {

    beforeEach(function(){
      element = angular.element('<div edit-my-profile>');

      inject(function ($controller, $rootScope, $compile) {
        var scope = $rootScope.$new();
        scope.name = name;
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('replaces a button with text', function(){
      expect(element.find('button')).toContain('Edit');
    });
  });
  });