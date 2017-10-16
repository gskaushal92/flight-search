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


.controller('FlightSearchCtrl', ['$scope','$filter','FlightService',function($scope,$filter,FlightService) {
	$scope.flightHeader="Flight Search Engine";
	$scope.flights=[]

	$scope.flight={
		'source':'',
		'destination':'',
		'departureDate':'',
		'returnDate':'',
		'passengers':''
	}

	$scope.search=function(){		
		FlightService.fetchFlights()
		.then(function(res){
			//console.log(res);
			let data=res.data
			$scope.flights=$filter('filter')(data.flights,function(value){

				if($scope.flight.returnDate){
					return value.source === $scope.flight.source && value.destination === $scope.flight.destination && value.departureDate === $scope.flight.departureDate && value.returnDate===$scope.flight.returnDate
				}
				else{
					return value.source === $scope.flight.source && value.destination === $scope.flight.destination && value.departureDate === $scope.flight.departureDate.toDateString()
				}
			})
			console.log($scope.flights)
		},function(){
			console.log('failure')
		});
	}
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