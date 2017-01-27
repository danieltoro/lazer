angular.module('lazer',[])


.controller('main', function( $scope, $http ){

      $http.get('http://localhost:4000/api')
      .then(function (data){

        $scope.datos = data.data;
      }, function (error) {
        // si hay un error lo mostramos por consola
        console.log(error)
      })
})
