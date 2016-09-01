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
	})
	.controller('myController', function($scope) {
		$scope.person= {name: 'Michael', age: 35}
	}).	
	controller('restController', function($scope) {
		$scope.rests = [
			{name: 'Mike', age: 34},
			{name: 'Joe', age: 34},
			{name: 'Jake', age: 2},
			{name: 'Charlie', age: 4},
		];

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
   

}])
