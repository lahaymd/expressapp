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

    $scope.registerForm = {};

    $scope.test = 'testing test';

    $scope.addPlayer = function() {
      alert('called');
    }
   
    $scope.register = function () {
      // call register from service
      AuthService.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function () {
          
          // $scope.registerForm = data;
           $scope.registerForm = {};

          
        })
        // handle error
        .catch(function (error) {
          alert(error)
        });
        // $scope.registerForm = {};
    };

    

}]).controller('UserController', ['$scope', 'AuthService', function($scope, AuthService) {
  $scope.userlist = {};
  AuthService.getUser()
    .then(function(users) {
      $scope.userlist = users;
    }, function(error) {
      console.log(error)
    })
}])
