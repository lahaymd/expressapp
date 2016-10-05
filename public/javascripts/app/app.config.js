angular
    .module('myApp')
    .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	       $urlRouterProvider.otherwise('/');
         $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/partials/index'
        }).
        state('users', {
          url: '/users',
          templateUrl: '/partials/users',
          controller: 'UserController'
        }).
        state('users.detail', {
          url: '/:id',
          templateUrl: '/partials/selecteduser',
          controller: 'ShowUserController'
        }).
        state('register', {
          url: '/register',
          templateUrl: '/partials/register',
          controller: 'RegisterController'
        }).
        state('api', {
          url: '/api/user',
          templateUrl: '/partials/users',
          controller: 'UserController'
        }).
        state('directive', {
          url: '/directive',
          templateUrl: '/partials/directive',
          controller: 'ExampleController'
        })
        
}

