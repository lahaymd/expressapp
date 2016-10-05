(function(){
	angular.module('myApp').
		controller('RegisterController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.registerForm = {};
    $scope.register = function () {
      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          // $scope.registerForm = data;
           $scope.registerForm = {};
           $location.path('/users')
        })
        // handle error
        .catch(function (error) {
          alert(error)
        });
        // $scope.registerForm = {};
    };
}])
})()