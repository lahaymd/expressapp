(function() {
	'use strict'

angular
    .module('myApp')
    .controller('AvengersController', AvengersController);

function AvengersController( $http, $log) {
        var vm = this;
    $http.get("/api/posts").then(function (response) {
        vm.avengers = response.data.posts[0].text;
        $log.info(response)
    });
}


})()


