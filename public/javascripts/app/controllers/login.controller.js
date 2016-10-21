(function() {
	angular.module('myApp').
		controller('NavController', ['$mdSidenav', function($mdSidenav) {
			var vm = this;
			// vm.isSidenavOpen= false;


	
		vm.open= function() {
			$mdSidenav('left').toggle();
			}
		
	}])
		
})()