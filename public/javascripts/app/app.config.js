angular
    .module('myApp')
    .config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
	       $urlRouterProvider.otherwise('/');
         $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '/partials/index',
          controller: 'AvengersController',
          controllerAs: 'vm'
     
        }).
        state('avengers', {
          url: '/avengers',
        	templateUrl: '/partials/avengers'
        }).
        state('comments', {
          url: '/comments',
          templateUrl: '/partials/comments'
        }).
        state('user', {
          url: '/user',
        	templateUrl: '/partials/user',
          controller: 'DataController',
          controllerAs: 'vm'
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
        state('new', {
          url: '/new',
          templateUrl: '/partials/new'
        }).
        state('login', {
          url: '/url',
          templateUrl: '/partials/newsession'
        }).
        state('test', {
          url: '/test',
          templateUrl: '/partials/test'
        }).
        state('background-attachment', {
          url: '/background-attachment',
          templateUrl: '/partials/background-attachment'
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

