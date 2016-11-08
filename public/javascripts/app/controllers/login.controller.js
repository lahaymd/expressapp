(function() {
	angular.module('myApp').
		controller('NavController', ['$mdSidenav', '$location',  function($mdSidenav, $location ) {
			var vm = this;
			// vm.isSidenavOpen= false;

			vm.currentNavItem = $location.path().slice(1) || 'login';
			console.log(vm.currentNavItem)


	
		vm.open= function() {
			$mdSidenav('left').toggle();
			}
		
	}]).
		controller('ModalController', ['$mdDialog', function($mdDialog) {
			var ctrl = this;

			ctrl.showAlert = function(event) {
			$mdDialog.show(
		      	$mdDialog.alert()
		        .parent(angular.element(document.querySelector('#popupContainer')))
		        .clickOutsideToClose(true)
		        .title('This is an alert title')
		        .textContent('You can specify some description text in here.')
		        .ariaLabel('Alert Dialog Demo')
		        .ok('Got it!')
		        .targetEvent(event)
		    );
		}
	}])
		
})();