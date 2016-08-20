angular
    .module('myApp')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: '../views/avengers'
        });
}