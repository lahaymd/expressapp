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
        when('/user/new', {
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
        when('/newsession', {
          templateUrl: '/partials/newsession'
        }).
        when('rest/session', {
          templateUrl: 'partials/user'
        }).
        otherwise({
        	redirectTo: '/'
        })
        
}

// function moviesPrepService(movieService) {
//     return movieService.getMovies();
// }