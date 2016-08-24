var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies, $timeout, $sce){ 

});
app.config(function($routeProvider) {
	$routeProvider.when('/cron_log',   {templateUrl: '/view/homepage.html', reloadOnSearch: false});
	$routeProvider.when('/',   {templateUrl: '/view/homepage.html', reloadOnSearch: false});
	$routeProvider.otherwise({redirectTo : '/'});
})

 
