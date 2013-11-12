'use strict';

describe('Service: Usersservice', function () {

  // load the service's module
  beforeEach(module('messageBoothApp'));

  // instantiate service
  var Usersservice;
  beforeEach(inject(function (_Usersservice_) {
    Usersservice = _Usersservice_;
  }));

  it('should do something', function () {
    expect(!!Usersservice).toBe(true);
  });

});
