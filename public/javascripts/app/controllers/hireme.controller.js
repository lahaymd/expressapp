(function() {
	angular.module('myApp')
		.controller('HireMeController', ['AuthService', '$scope', function(AuthService, $scope) {
			// var $ctrl = this;
			// $ctrl.name = 'Mike';

			$scope.hiremelist = {};

			$scope.hired = function() {
				AuthService.hire($scope.hiremelist.firstname,$scope.hiremelist.lastname,$scope.hiremelist.email,$scope.hiremelist.phone,$scope.hiremelist.message)
				.then(function (newUser) {
          
          			$scope.hiremelist.push(newUser);
         
        		})
        		.catch(function(error) {
        			alert(error)
        		})
			}


		}])
})()