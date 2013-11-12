'use strict';

angular.module('messageBoothApp')
  .service('UsersService', function Users($http) {
    var usersService = {
	    get: function() {
	      var promise = $http.get('/users.json').then(function (response) {
	        console.log(response);
	        return response.data;
	      });
	      return promise;
	    },
		put: function(id, user) {
				var promise = $http.put('/users/'+id+'.json', user).then(function (response) {
	        	console.log("User:");
				console.log(user);
	        	return response.data;
	      });
	      return promise;
	    }
	  };
	  return usersService;
  });
