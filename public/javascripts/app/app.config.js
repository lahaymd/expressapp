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
          templateUrl: 'partials/index',
          controller: 'AvengersController',
        
          // resolve: {
          //   moviesPrepService: moviesPrepService
          // }
        }).
        when('/avengers', {
        	templateUrl: 'partials/avengers'
        }).
        when('/user', {
        	templateUrl: 'partials/user'
        }).
        otherwise({
        	redirectTo: '/'
        })
        
}

// function moviesPrepService(movieService) {
//     return movieService.getMovies();
// }