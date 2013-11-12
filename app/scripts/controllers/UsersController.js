'use strict';

angular.module('messageBoothApp')
  .controller('UsersViewController', function ($scope, UsersService, MessagesService) {
       UsersService.get().then(function(d){
			$scope.users = d;
			console.log(d);
	   });
	$scope.updateSelection = function($event, message) {
		   var checkbox = $event.target;
		   message.read = checkbox.checked;
		   MessagesService.put(message.id, message);
	}
	var userToEdit;
	$scope.selectUserToEdit = function($event, user) {
		    userToEdit = user;
	}
	$scope.$on('update', function(event, message) {
		userToEdit.name = message;
		UsersService.put(userToEdit.id, userToEdit).then(function(d){
			console.log(d);
		});
	});
  });


