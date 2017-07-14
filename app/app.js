"use strict"

angular.module('myApp',[
	'ngRoute'
]).
config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo: '/'});
}])
.controller('FlightSearchCtrl', ['$scope','$http','$filter',function($scope,$http,$filter) {

	$scope.flights={};
	$http.get("data/data.json").then(function(response){
		$scope.flights=response.data;
		console.log($scope.flights);
	});


	$scope.searchFlights=function(){

		$scope.flightDetails=$filter('filter')($scope.flights.flights, {'source':'PNQ'}|| {'destination':'DEL'});
		console.log($scope.flightDetails);
	 }

	// FlightService.GetFlights().then(function(data){
	// 	console.log(data);
	// });
	
	// $scope.flight="Test flight";
}])
;