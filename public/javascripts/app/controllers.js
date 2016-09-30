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
	controller('DataController',  function( ) {
    var vm = this;
		vm.mongoStuff =[
                          {name: 'Jake', password: '123'},
                          {name: 'MIke', password: 'password'}
                        ] ;

   

}).controller('RegisterController',
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
  $scope.test = 'testing link function'
  AuthService.getUser()
    .then(function(users) {
      $scope.userlist = users;
    }, function(error) {
      console.log(error)
    })
}]).controller('ShowUserController', ['$scope', '$stateParams', 'AuthService', function($scope, $stateParams, AuthService) {
      $scope.selectedUser = {};
      AuthService.find($stateParams.id)
        .then(function(user) {
          $scope.selectedUser = user;
          console.log(user,'!!!')
        }, function(error) {
          console.log(error);
        })

}]).directive('myDirective', function() {
      return {
        restrict: 'E',
        transclude : true,
        template: '<div>I am <span ng-transclude></span> directive {{test}}   {{userlist[0].username}}</div>',
        link: function(scope, element, attrs) {
                // console.log(scope.userlist , element , attrs)
                // scope.test= 'changed text from link function'
                element.addClass('foo');
                console.log(parseInt(attrs.bar) + 6);
                
                
          },

      }
})
























