angular.module('lazer',[])


.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'main',
		templateUrl: 'template/home.html'
	})
	.otherwise({
            redirectTo: '/'
    })

})
.controller('main', function( $scope, $http ){

      $http.get('http://localhost:3000/api')
      .then(function(data){

          $scope.datos = data.data;
      },function(error){
          //si hay un error lo mostramos por consola
          console.log(error)
})
