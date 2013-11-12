'use strict';

describe('Controller: UserscontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('usersApp'));

  var UserscontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserscontrollerCtrl = $controller('UserscontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
