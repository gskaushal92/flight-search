"use strict"

angular.module('myApp',[
	'ngRoute'
]).
config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo: '/'});
}])
.controller('FlightSearchCtrl', ['$scope',function($scope) {
	$scope.flight="Test flight";
}]);