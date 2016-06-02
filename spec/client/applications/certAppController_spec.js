'use strict';

describe('CertAppModule Module', function() {

  var $controller;
  var $scope;

  beforeEach(module('CertAppModule'));

  // This needs to be before the other beforeEach create mock dep before
  // creating the controller itself
  beforeEach(function () {

    var mockCertAppService = {
        certificationApplicationData: {
          small: true
        }
    };

    module(function ($provide) {
        $provide.value('CertAppService', mockCertAppService);
    });
  });

  beforeEach(function() {
    $scope = {};

    inject(function($controller) {
      var $controller = $controller('NewApplicationController', {$scope: $scope});
    });
  });

  describe('New Application Controller', function(){
    it('Should exists with blank model', function() {
      expect($scope.certificationApplicationData).toBeDefined();
    });
  });

  describe('New Application Controller Service integration', function(){
    it('Should update the scope based on the model of the service', function() {
      expect($scope.certificationApplicationData.small).toBe(true);
    });
  });

});
