var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies, $timeout, $sce){ 
	$scope.loadGitLog = function() {
		$http({
		  method: 'GET',
		  url: '/api/git_log.js'
		}).then(function successCallback(response) {
			console.log(response);
		  }, function errorCallback(response) {	
			console.log(response);						
		});			
	};
	$scope.loadGitLog();
});
app.config(function($routeProvider) {
	$routeProvider.when('/cron_log',   {templateUrl: '/view/homepage.html', reloadOnSearch: false});
	$routeProvider.when('/',   {templateUrl: '/view/homepage.html', reloadOnSearch: false});
	$routeProvider.otherwise({redirectTo : '/'});
})

 
