angular.module('lazer', ['ngRoute','controllers'])

.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'main',
		templateUrl: 'views/home.html'
	})
	.otherwise({redirect: '/'})
})
