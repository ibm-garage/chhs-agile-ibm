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

    inject(function ($controller, $rootScope, $compile, $localStorage) {
      var $controller = $controller('ProfileController', {$scope: $scope});
    });
  });
  
  describe('Profile Controller', function () {

    xit('should contain a $localStorage service', inject(function(
      $localStorage
    ) {
      expect($localStorage).not.to.equal(null);
    }));

    it('has a profile controller', function () {
      expect($scope.data).toEqual('Profile');
    });

    it('has parent address', function () {
      expect($scope.profileData).toBeDefined();
    });

    it('has a local storage', function(){
      expect($scope.storage).toBeDefined();
    });

    it('has an address in local storage', function () {
      expect(Object.keys($scope.storage)).toContain('parent_home_address');
    });
  });

  xdescribe('Edit Profile', function () {

    // beforeEach(function(){
    //   element = angular.element('<div edit-my-profile/>');
    //
    //   inject(function ($controller, $rootScope, $compile) {
    //     var scope = $rootScope.$new();
    //     scope.name = name;
    //     $compile(element)(scope);
    //     scope.$digest();
    //   });
    // });

    beforeEach(function(){
      element = angular.element('<div edit-my-profile />');

      inject(function ($controller, $rootScope, $compile, $localStorage) {
        var scope = $rootScope.$new();
        console.log('scope:'+
          JSON.stringify(scope.storage.parent_home_address));
        $compile(element)(scope);
        scope.$digest();
      });
    });

    it('has a editmyProfile directive', function(){
      expect(true).toBe(true);
      //expect(element.find('button')).toContain('Edit');
    });
  });
  });