angular.module('myApp', ['ui.router','ngAnimate', 'ngMessages', 'ngMaterial'])
	.config(function($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('yellow')
			.accentPalette('pink')
			.backgroundPalette('orange')
	})