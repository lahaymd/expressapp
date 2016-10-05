(function(){
	angular.module('myApp').
		controller('ShowUserController', ['$scope', '$stateParams', 'AuthService', function($scope, $stateParams, AuthService) {
      $scope.selectedUser = {};
      
      AuthService.find($stateParams.id)
        .then(function(user) {
          $scope.selectedUser = user;
          console.log(user,'!!!')
        }, function(error) {
          console.log(error);
        })

}])
})()