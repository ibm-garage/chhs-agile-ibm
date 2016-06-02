(function(){
  'use strict';

  var module = angular.module('CertAppModule', ['CertAppServiceModule'])

  module.controller('NewApplicationController', ['$scope', 'CertAppService', function($scope, CertAppService){
    $scope.certificationApplicationData = CertAppService.certificationApplicationData;
  }]);
})();
