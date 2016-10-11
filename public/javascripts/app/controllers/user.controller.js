(function() {
	angular.module('myApp').
		controller('UserController', ['$scope', '$stateParams', 'AuthService',  function($scope, $stateParams, AuthService ) {

 $scope.userlist = {};


var fetchUsers= function() {
                  AuthService.getUsers()
                  .then(function(users) {
                    $scope.userlist = users;
                    console.log(users)
                  }, function(error) {
                    console.log(error)
                  })
                }

fetchUsers();

 
  $scope.removeUser = function(id) {
                      console.log(id)
                          AuthService.remove(id)
                            .then(function() {
                              console.log('promise returned');
                              fetchUsers();
                            })
                            
                        }


  $scope.test = 'testing link function'

      $scope.selectedUser = {};
      
   var refresh=  function(){ AuthService.find($stateParams.id)
                      .then(function(user) {
                        $scope.selectedUser = user;
                        console.log(user,'!!')
                      }, function(error) {
                        console.log(error);
                      })
                  }

    refresh();


      $scope.updateUser = function() {
        console.log($scope.selectedUser)
        AuthService.update($scope.selectedUser)
          .then(function() {
            console.log('updated from controller')
              fetchUsers();
          }, function(error) {
            console.log('you fucked up')
            console.log(error.message)
          })
      }



  
}])
})()