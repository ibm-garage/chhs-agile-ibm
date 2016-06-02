'use strict';

describe('Inbox Module', function () {
  var $controller;
  var $scope;

  beforeEach(module('inboxModule'));

  beforeEach(function() {
    $scope = {};

    inject(function ($controller) {
      var $controller = $controller('InboxController', {$scope: $scope});
    })
  });

  describe('Inbox Controller', function () {
    it('has a inbox controller', function () {
      expect($scope.data).toEqual('Inbox');
    });
  });
});