(function() {
	angular.module('myApp').
		controller('NavController', ['$mdSidenav',  function($mdSidenav ) {
			var vm = this;
			// vm.isSidenavOpen= false;

	


	
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
		
})()