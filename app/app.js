"use strict"

angular.module('myApp',[
	'ngRoute'
]).config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/flight',{
		templateUrl: 'views/flight.html',
	})
	.otherwise({
		redirectTo: '/'
	});
}])


.controller('FlightSearchCtrl', ['$scope','FlightService',function($scope,FlightService) {
	$scope.flight="Flight Search Engine";
	$scope.flights=[]
	FlightService.fetchFlights()
	.then(function(res){
		//console.log(res);
		$scope.flights=res.data
		console.log($scope.flights)
	},function(){
		console.log('failure')
	});
	//angular.element('.datePicker').datepicker()
}])

.service('FlightService',['$http',function ($http) {
	// body...
	let self=this

	self.fetchFlights=function(){

		return $http.get('data/data.json');
		// let session
		// angular.elementhttp({
		// 	method:'GET',
		// 	url:'data/data.json',
		// 	headers: {
  //  				'Content-Type': 'application/json'
 	// 		}	
		// }).then(function(res){
		//  session=res.data
		// },
		// function(err){
		// 	session=err
		// 	//console.log(err)
		// })
		// return session
	}
}])
;