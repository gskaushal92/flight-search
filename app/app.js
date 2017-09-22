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

	 (function() {

        function addSeperator(nStr) {
            nStr += '';
            var x = nStr.split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;
            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1' + '.' + '$2');
            }
            return x1 + x2;
        }

        function rangeInputChangeEventHandler(e){
            var rangeGroup = $(this).attr('name'),
                minBtn = $(this).parent().children('.min'),
                maxBtn = $(this).parent().children('.max'),
                range_min = $(this).parent().children('.range_min'),
                range_max = $(this).parent().children('.range_max'),
                minVal = parseInt($(minBtn).val()),
                maxVal = parseInt($(maxBtn).val()),
                origin = $(this).context.className;

            if(origin === 'min' && minVal > maxVal-5){
                $(minBtn).val(maxVal-5);
            }
            var minVal = parseInt($(minBtn).val());
            $(range_min).html(addSeperator(minVal*1000) + ' €');


            if(origin === 'max' && maxVal-5 < minVal){
                $(maxBtn).val(5+ minVal);
            }
            var maxVal = parseInt($(maxBtn).val());
            $(range_max).html(addSeperator(maxVal*1000) + ' €');
        }

     $('input[type="range"]').on( 'input', rangeInputChangeEventHandler);
})();
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