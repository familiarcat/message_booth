'use strict';

angular.module('messageBoothApp')
  .service('UsersService', function Users($http) {
    var usersService = {
	    get: function() {
	      var promise = $http.get('http://localhost:3000/users.json').then(function (response) {
	        console.log(response);
	        return response.data;
	      });
	      return promise;
	    },
		put: function(id, user) {
				var promise = $http.put('http://localhost:3000/users/'+id+'.json', user).then(function (response) {
	        	console.log("User:");
				console.log(user);
	        	return response.data;
	      });
	      return promise;
	    }
	  };
	  return usersService;
  });
