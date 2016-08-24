angular
.module('myApp')
.factory('dataservice', function($http) {
	return{
		get: function() {
			$http.get('data.json')
		}
	}
})




