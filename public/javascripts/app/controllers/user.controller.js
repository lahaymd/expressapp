(function() {
	angular.module('myApp').
		controller('UserController', ['$scope', '$stateParams', 'AuthService',  function($scope, $stateParams, AuthService ) {

 $scope.userlist = {};


AuthService.getUser()
    .then(function(users) {
      $scope.userlist = users;
    }, function(error) {
      console.log(error)
    })



 
  $scope.removeUser = function(id) {
    console.log(id)
        AuthService.remove(id)
          .then(function() {
            console.log('promise returned');
            AuthService.getUser()
    .then(function(users) {
      $scope.userlist = users;
    }, function(error) {
      console.log(error)
    })
          })
          
      }


  $scope.test = 'testing link function'
  
}])
})()