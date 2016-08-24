var app = angular.module('qaletApp', [
	'ngCookies',
	'ngRoute'
]);
app.controller('mainController', function($rootScope, $scope, $location, $http, $cookies, $timeout, $sce){ 
	$scope.getVhostList = function(data) {
		var list  = [];
		for(var i=0; i< data.longth; i++) {
			for ((k, v) in data[i]) {
				if (list.indexOf(k) == -1) {
					list[list.length] = k;	
				}
			}	
		}
		$scope.vhost_list = list;
		
		console.log($scope.vhost_list);
	}
	
	
	$scope.loadGitLog = function() {
		$http({
		  method: 'GET',
		  url: '/api/git_log.js'
		}).then(function successCallback(response) {
			$scope.getVhostList(response.data);
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

 
