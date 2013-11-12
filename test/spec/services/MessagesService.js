'use strict';

describe('Service: Messagesservice', function () {

  // load the service's module
  beforeEach(module('messageBoothApp'));

  // instantiate service
  var Messagesservice;
  beforeEach(inject(function (_Messagesservice_) {
    Messagesservice = _Messagesservice_;
  }));

  it('should do something', function () {
    expect(!!Messagesservice).toBe(true);
  });

});
