'use strict';

angular.module('messageBoothApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/UsersView.html',
        controller: 'UsersViewController'
      })
	  .when('/users', {
	        templateUrl: 'views/UsersView.html',
	        controller: 'UsersViewController'
	      })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('messageBoothApp')
	.directive("clickToEdit", function() {
	    var editorTemplate = '<div class="click-to-edit">' +
	        '<div ng-hide="view.editorEnabled">' + 
	            '<h6>{{value}}</h6> ' +
	            '<a ng-click="enableEditor()">Edit</a>' +
	        '</div>' +
	        '<div ng-show="view.editorEnabled">' +
	            '<input ng-model="view.editableValue">' +
	            '<a  ng-click="save()">Save</a>' +
	            ' or ' +
	            '<a ng-click="disableEditor()">cancel</a>.' +
	        '</div>' +
	    '</div>';

	    return {
	        restrict: "A",
	        replace: true,
	        template: editorTemplate,
	        scope: {
	            value: "=clickToEdit",
	        },
	        controller: function($scope) {
	            $scope.view = {
	                editableValue: $scope.value,
	                editorEnabled: false
	            };

	            $scope.enableEditor = function() {
	                $scope.view.editorEnabled = true;
	                $scope.view.editableValue = $scope.value;
	            };

	            $scope.disableEditor = function() {
	                $scope.view.editorEnabled = false;
	            };

	            $scope.save = function() {
	                $scope.value = $scope.view.editableValue;
					$scope.$emit("update", $scope.view.editableValue)
	                $scope.disableEditor();
	            };
	        }
	    };
	});
