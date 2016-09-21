angular
    .module('myApp')
    .config(config);

function config($routeProvider, $locationProvider) {
	       $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
    $routeProvider
        .when('/', {
          templateUrl: '/partials/index',
          controller: 'AvengersController',
          controllerAs: 'vm'
        
          // resolve: {
          //   moviesPrepService: moviesPrepService
          // }
        }).
        when('/avengers', {
        	templateUrl: '/partials/avengers'
        }).
        when('/user', {
        	templateUrl: '/partials/user'
        }).
        when('/new', {
          templateUrl: '/partials/new'
        }).
        when('/login', {
          templateUrl: '/partials/newsession'
        }).
        when('/test', {
          templateUrl: '/partials/test'
        }).
        when('/background-attachment', {
          templateUrl: '/partials/background-attachment'
        }).
        when('/register', {
          templateUrl: '/partials/register',
          controller: 'RegisterController'
        }).
        when('/rest/session', {
          templateUrl: '/partials/user'
        }).
        when('/user/users', {
          templateUrl: '/partials/users',
          controller: 'UserController'
        }).
        otherwise({
        	redirectTo: '/'
        })
        
}

// function moviesPrepService(movieService) {
//     return movieService.getMovies();
// }