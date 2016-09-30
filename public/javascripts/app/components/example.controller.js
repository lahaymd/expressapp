angular.module('myApp')
	.controller('ExampleController', function($scope){
		$scope.ctrlName = 'foo';
		$scope.ctrlFlavor = 'cherry'
		$scope.isDisabled= true;
		$scope.saySomething= function() {alert('say something!')}
		$scope.someMethod = function(blah) {
			alert(blah)
		}
	})
