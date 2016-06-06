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

    describe('Messages List', function () {

      it('is defined', function () {
        expect($scope.inboxData).toBeDefined();
      });

      it('has a title', function () {
        expect($scope.inboxData[0].title).toContain('Welcome');
      });

      it('has a from', function () {
        expect($scope.inboxData[0].from).toContain('From: Francis');
      });

      it('has 2 messages', function () {
        expect($scope.inboxData.length).toEqual(2);
      });
    });

  });
});