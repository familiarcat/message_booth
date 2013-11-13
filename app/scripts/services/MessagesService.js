'use strict';

angular.module('messageBoothApp')
  .service('MessagesService', function MessagesService($http) {
    var messagesService = {
	    put: function(id, message) {
				var promise = $http.put('messages/'+id+'.json', message).then(function (response) {
	        	console.log("Message:");
				console.log(message);
	        	return response.data;
	      });
	      return promise;
	    }
	  };
	  return messagesService;
  });
