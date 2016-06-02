'use strict';

describe('App Routes', function() {

  var $route;

  beforeEach(module('myApp'));

  beforeEach(inject(
    function(_$route_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $route = _$route_;
  }));

  describe('New Certification Selection Route', function(){
    it('Uses the correct Route and Controller', function(){
        expect($route.routes['/certificationSelection'].controller).toBe('NewApplicationController');
        expect($route.routes['/certificationSelection'].templateUrl).toBe('client/views/applications/certificationSelection.html');
    });
  });

  describe('New Application Route', function(){
    it('Uses the correct Route and Controller', function(){
        expect($route.routes['/application/new'].controller).toBe('NewApplicationController');
        expect($route.routes['/application/new'].templateUrl).toBe('client/views/applications/newApplication.html');
    });
  });
});
