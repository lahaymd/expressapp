(function() {
	'use strict'

// 	angular
// 	.module('myApp')
// 	.controller('IndexController', IndexController)

// function IndexController() {
	
// 	this.foos = [1,2,3]
// }


angular
    .module('myApp')
    // .controller('AvengersController', function(dataservice) {
    // 	dataservice.get().then(function(response) {
    // 		$scope.avengers= response.data.employees;
    // 	})
    // });
    .controller('AvengersController', function($scope, $http, $log) {
    $http.get("/api/posts").then(function (response) {
        $scope.avengers = response.data.posts[0].text;
        $log.info(response)
    });
});




})()


