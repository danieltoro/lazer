exports = angular.module('controllers',[])

.controller('main', function($scope,$http){

	$http({method:'get', url:'/api/commerces'})
	.then(function(data){
		$scope.commerces = data.data;
		console.log(data.data);
	},function(err){
		if (err) {console.log(err)}
	})
})
