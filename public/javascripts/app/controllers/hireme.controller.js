(function() {
	angular.module('myApp')
		.controller('HireMeController', ['AuthService', '$scope', function(AuthService, $scope) {
			// var $ctrl = this;
			// $ctrl.name = 'Mike';

			$scope.hiremelist = {};



			var fetchHired= function() {
                  AuthService.getHired()
                  .then(function(users) {
                    $scope.hiremelist = users;
                    console.log(users)
                  }, function(error) {
                    console.log(error)
                  })
                }

fetchHired();


			$scope.hired = function() {
				AuthService.hire($scope.hiremelist.firstname,$scope.hiremelist.lastname,$scope.hiremelist.email,$scope.hiremelist.phone,$scope.hiremelist.message)
				.then(function (newUser) {
          			alert(JSON.stringify(newUser));
          			$scope.hiremelist.push(newUser);
          			alert($scope.hiremelist);
          			angular.element(document.querySelectorAll('input')).val('');
         
        		})
        		.catch(function(error) {
        			alert($scope.hiremelist);
        			alert(error)
        		})
			}


		}])
})()