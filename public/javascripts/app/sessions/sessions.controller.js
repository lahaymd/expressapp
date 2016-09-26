(function() {
	'use strict'

angular
    .module('myApp')
    .controller('AvengersController', AvengersController);

function AvengersController( $http, $log) {
        var vm = this;
    vm.avengers = 'I am from the avengers controller'
}


})()


