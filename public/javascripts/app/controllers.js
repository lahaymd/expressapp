angular.module('myApp')
	.factory('myFactory', function($q, $http) {
		return {
			getMongoStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('/api/user');
 
        httpPromise.success(function (components) {
          deferred.resolve(components);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
 
        return deferred.promise;
      }
		}
	}).
	controller('dataController', ['$scope','myFactory', function($scope, myFactory ) {
		$scope.mongoStuff = {};
myFactory.getMongoStuff()
  .then(function (components) {
    $scope.mongoStuff = components;
    $scope.arrFromMyObj = Object.keys($scope.mongoStuff).map(function(key) {
    return $scope.mongoStuff[key];
  });
  }, function (error) {
    console.error(error);
	});
   

}]).controller('RegisterController',
  ['$scope', '$location', 'AuthService',
  function ($scope, $location, AuthService) {

    $scope.register = function () {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function () {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };

}]);
